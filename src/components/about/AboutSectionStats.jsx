import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.css";

// Animation Variants
const statsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger animation for each stat
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutSectionStats() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <motion.div
      className="about-section__stats"
      ref={ref} // Attach ref to trigger animation on scroll
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={statsVariants} // Apply the container animation
    >
      <motion.div className="about-section__stat" variants={statItemVariants}>
        <span className="stat__number">10+</span>
        <span className="stat__label">Projects Built</span>
      </motion.div>
      <motion.div className="about-section__stat" variants={statItemVariants}>
        <span className="stat__number">X</span>
        <span className="stat__label">Happy Clients</span>
      </motion.div>
      <motion.div className="about-section__stat" variants={statItemVariants}>
        <span className="stat__number">2</span>
        <span className="stat__label">Years into React</span>
      </motion.div>
    </motion.div>
  );
}
