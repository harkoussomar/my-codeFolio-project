import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.css";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger the entrance of the child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutSectionVision() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <motion.div
      className="about-section-vision"
      ref={ref} // Ref to track when the section comes into view
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate based on inView
      variants={sectionVariants} // Apply the container animation
    >
      <motion.h2 variants={itemVariants}>Vision</motion.h2>
      <div className="about-vision__items">
        <motion.div className="about-vision__item" variants={itemVariants}>
          <h3>Aspiring Full-Stack Developer</h3>
          <p>
            On a journey to mastering both front-end and back-end technologies,
            building complete and scalable applications.
          </p>
        </motion.div>
        <motion.div className="about-vision__item" variants={itemVariants}>
          <h3>Big Tech Career Ambition</h3>
          <p>
            Aiming to join industry leaders like Google or Microsoft,
            contributing to cutting-edge innovations and solutions.
          </p>
        </motion.div>
        <motion.div className="about-vision__item" variants={itemVariants}>
          <h3>Future Team Lead</h3>
          <p>
            Working towards leading a team of developers, mentoring them, and
            driving projects to success.
          </p>
        </motion.div>
        <motion.div className="about-vision__item" variants={itemVariants}>
          <h3>Mentor and Educator</h3>
          <p>
            Passionate about helping others learn programming and sharing
            knowledge to uplift aspiring developers in their journey.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
