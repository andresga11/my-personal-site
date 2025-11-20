import { label } from "motion/react-client";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

export const projects = [
  {
    label: "911 Carrera",
    title: "Porsche",
    subtitle: "Iconic daily sports car.",
    hoverTitle: "911 Carrera GTS",
    hoverSubtitle: "Sharper, more dynamic responsiveness.",
    imageUrl: "https://picsum.photos/1200/801",
  },
  {
    label: "Taycan",
    title: "Porsche",
    subtitle: "Pure electric performance.",
    hoverTitle: "Taycan Turbo S",
    hoverSubtitle: "Brutal acceleration. Zero emissions.",
    imageUrl: "https://picsum.photos/1200/800",
  },
  {
    label: "Cayenne",
    title: "Porsche",
    subtitle: "Sports car for the whole family.",
    hoverTitle: "Cayenne Turbo GT",
    hoverSubtitle: "SUV with track-bred power.",
    imageUrl: "https://picsum.photos/1200/802",
  },
  {
    label: "Macan EV",
    title: "Porsche",
    subtitle: "Electric performance.",
    hoverTitle: "Macan Turbo EV",
    hoverSubtitle: "Up to 630 hp. Instant torque.",
    imageUrl: "https://picsum.photos/1200/803",
  },
];

const ProjectGallery = () => {
  return (
    <motion.section
      className="w-full max-w-6xl mx-auto py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl ">Projects</h2>
          <p className="mt-1 text-sm">Hover each card to explore details.</p>
        </div>
      </div>

      <motion.div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            label={project.label}
            title={project.title}
            subtitle={project.subtitle}
            hoverTitle={project.hoverTitle}
            hoverSubtitle={project.hoverSubtitle}
            imageUrl={project.imageUrl}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectGallery;
