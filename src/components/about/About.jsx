import { motion } from "framer-motion";
import "./about.css";

import PersonalImage from "../../assets/profile.png";
import AboutSectionContent from "./AboutSectionContent";
import AboutSectionStats from "./AboutSectionStats";
import AboutSectionVision from "./AboutSectionVision";
import SwiperSlideItems from "./SwiperSlideItems";
import AboutSectionServices from "./AboutSectionServices";

// Animation Variants
const smoothAnimationVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Start from 80% size and opacity 0
  visible: {
    opacity: 1,
    scale: 1, // End at full size
    transition: {
      duration: 1, // Duration of the animation
      ease: [0.4, 0, 0.2, 1], // Custom easing for acceleration at the end
    },
  },
};

export default function About() {
  return (
    <motion.div
      className="about container"
      initial="hidden"
      animate="visible"
      variants={smoothAnimationVariants} // Use the smooth animation for the container
    >
      {/* Title Animation */}
      <motion.h1 className="main__title" variants={smoothAnimationVariants}>
        Omar Harkouss
      </motion.h1>

      {/* Image Animation */}
      <motion.div
        className="image__container"
        variants={smoothAnimationVariants}
      >
        <img src={PersonalImage} alt="personal picture" />
      </motion.div>

      <AboutSectionContent />
      <AboutSectionStats />
      <AboutSectionVision />
      <SwiperSlideItems />
      <AboutSectionServices />
    </motion.div>
  );
}
