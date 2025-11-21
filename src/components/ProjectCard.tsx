import { useState } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  label: string;
  title: string;
  subtitle: string;
  hoverTitle: string;
  hoverSubtitle: string;
  imageUrl: string;
};

const ProjectCard = ({
  label,
  title,
  subtitle,
  hoverTitle,
  hoverSubtitle,
  imageUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-80 w-full max-w-4xl overflow-hidden rounded-3xl bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-black/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black via-black/90 via-[65%] to-transparent" />

      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <p className="text-3xl uppercase tracking-[0.2em] font-bold text-white/90">
          {label}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-6">
        <motion.div
          key={isHovered ? "hover" : "rest"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="mt-2 text-xl font-bold text-white/90">
            {isHovered ? hoverTitle : title}
          </h3>
          <p className="mt-2 text-sm  font-bold text-white/90">
            {isHovered ? hoverSubtitle : subtitle}
          </p>
        </motion.div>

        <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/90">
          Explore
          <span className="text-lg">↗</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
