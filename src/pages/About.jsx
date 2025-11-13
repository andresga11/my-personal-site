import { motion } from "framer-motion";
import Gallery from "../components/Gallery";


export default function About() {
    return (

        <div>


            <motion.h1
                className="text-2xl sm:text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About
            </motion.h1>

            <motion.p
                className="text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                who I am.
            </motion.p>
            <Gallery />
        </div>
    )
}