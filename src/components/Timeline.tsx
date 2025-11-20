import { motion } from "framer-motion";
import { timelineData } from "../data/timelineData";
import { useState } from "react";
import { div } from "motion/react-client";

export const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl mb-10 ">Timeline</h2>
      {/* Section scales when hovered anywhere inside */}
      <motion.section
        className="relative max-w-2xl mx-auto py-8 left-3"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Vertical line – at x = 0 */}
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

        {/* Push content right so it's not on top of the line */}
        <ol className="space-y-6 pl-6">
          {timelineData.map((item, index) => (
            <li key={item.title + item.subtitle} className="relative">
              {/* Dot on the line – shares left=0 with the line, centered with translate */}
              <span
                className={`
                absolute left-[-15px] top-3 -translate-x-1/2
                w-3 h-3 rounded-full
                ${item.dotColor}
                ring-4 ring-white
                dark:ring-gray-900
              `}
              />

              {/* Card content – this is what scales per item */}
              <motion.div
                className="
                relative
                px-4 py-3
                cursor-default
              "
                style={{ transformOrigin: "left center" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  scale: hoveredIndex === index ? 1.03 : 1,
                  opacity:
                    hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <span className="absolute text-md top-2 right-10 ">
                  {item.date}
                </span>
                <p className="text-md uppercase tracking-[0.2em]">
                  {item.title}
                </p>
                <h3 className="text-md sm:text-base font-semibold mt-1">
                  {item.subtitle}
                </h3>
                <p className="text-md mt-1">{item.description}</p>
              </motion.div>
            </li>
          ))}
        </ol>
      </motion.section>
    </div>
  );
};

export default Timeline;
