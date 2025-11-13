import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function StackedGallery({
  images = [],
  width = 320,
  height = 420,
  borderRadius = "1rem",
  maxAnimated = 5,
  className = "",
  hint = "Click to cycle",
  onCycle, // optional callback
}) {
  if (!images.length) return null;

  const prefersReducedMotion = useReducedMotion();

  // Keep order of indices: 0 is current top/front
  const [order, setOrder] = useState(images.map((_, i) => i));

  // Reset order if images array changes length or identity
  useEffect(() => {
    setOrder(images.map((_, i) => i));
  }, [images]);

  // Rotate the array so [0,1,2] -> [1,2,0]
  const cycle = useCallback(() => {
    setOrder((prev) => {
      if (!prev.length) return prev;
      const next = [...prev.slice(1), prev[0]];
      onCycle?.(next[0]); // report new top index if needed
      return next;
    });
  }, [onCycle]);

  // Derive layer transforms from visual position in the stack
  const layers = useMemo(() => {
    const max = Math.min(order.length, maxAnimated);
    return order.map((idx, layerIndex) => {
      const depth = Math.min(layerIndex, max - 1); // clamp animated depth
      return {
        imgIdx: idx,
        z: order.length - layerIndex, // higher on top
        y: depth * 8, // vertical offset
        scale: 1 - depth * 0.04, // slight shrink per layer
        rotate: (depth % 2 === 0 ? 1 : -1) * (2 + depth), // subtle tilt
      };
    });
  }, [order, maxAnimated]);

  const spring = prefersReducedMotion
    ? { duration: 0 } // snaps if user prefers reduced motion
    : { type: "spring", stiffness: 260, damping: 26 };

  return (
    <div
      className={`relative mx-auto select-none ${className}`}
      style={{ width, height }}
    >
      {/* The stack */}
      <div
        className="relative w-full h-full"
        aria-live="polite"
        aria-label="Stacked photo gallery; click top image to cycle"
      >
        {layers.map(({ imgIdx, z, y, scale, rotate }, layerIndex) => {
          const isTop = layerIndex === 0;
          return (
            <motion.div
              key={`${imgIdx}`} // stable enough if images prop is stable
              className={`absolute inset-0 shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-800 ${
                isTop ? "cursor-pointer" : "pointer-events-none"
              }`}
              style={{ borderRadius, zIndex: z }}
              animate={{ y, scale, rotate }}
              initial={false}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              whileHover={
                isTop && !prefersReducedMotion
                  ? { scale: scale + 0.01 }
                  : undefined
              }
              onClick={isTop ? cycle : undefined}
              role={isTop ? "button" : undefined}
              tabIndex={isTop ? 0 : -1}
              onKeyDown={
                isTop
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        cycle();
                      }
                    }
                  : undefined
              }
              aria-label={isTop ? "Show next photo" : undefined}
              title={isTop ? "Click to show next photo" : undefined}
            >
              <img
                src={images[imgIdx]}
                alt=""
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Optional hint */}
      {hint && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] md:text-xs px-2 py-1 rounded-md bg-black/50 text-white">
          {hint}
        </div>
      )}
    </div>
  );
}
