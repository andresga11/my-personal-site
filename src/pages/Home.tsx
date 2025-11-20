import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const _ignore = motion; // marks it as "read" for some configs
import SpotifyPlaying from "../components/SpotifyPlaying";
import ProjectCard from "../components/ProjectCard";
import me from "../assets/IMG_1 copy.png";

export default function Home() {
  return (
    <div>
      <Fade triggerOnce duration={2000}>
        <section className="space-y-4">
          <motion.div
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={["hello, this is Andres"]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={50}
              style={{ display: "inline-block" }}
            />
          </motion.div>

          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            I'm an aspiring software engineer who loves clean code, turning
            ideas into features, and working with a team.
          </motion.p>
        </section>
      </Fade>
      <p className="mt-4 ">
        <motion.img
          src={me}
          alt="Profile"
          className="w-100 h-400 rounded-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </p>

      <motion.section className="mt-4">
        <div>
          <SpotifyPlaying />
        </div>
      </motion.section>

      <div>
        <ProjectCard
          title="Project 1"
          subtitle="This is the first project"
          hoverTitle="Hover Title"
          hoverSubtitle="Hover Subtitle"
          imageUrl="https://picsum.photos/600/300"
        />
      </div>
    </div>
  );
}
