import { motion } from "framer-motion";
import "./home.css";
import profileImage from "../../assets/profile.png";
import HomeNavElement from "./HomeNavElement";
import SecondButton from "../ui/secondButton";

// Common transition settings
const commonTransition = {
  duration: 1, // Reduced the duration for quicker transitions
  ease: [0, 0.1, 0.4, 1],
};

// Animation Variants
const containerVariants = {
  hidden: { y: 150 },
  visible: { y: 0 },
  exit: { y: -150, opacity: 0 }, // Exit animation for route transition
};

const fadeInVariants = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay } }, // Reduced duration to 0.5s
  exit: { opacity: 0, transition: { duration: 0.5 } },
});

export default function Home() {
  return (
    <motion.div
      className="home container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      transition={{ ...commonTransition, delay: 0 }} // Removed delay for faster loading
    >
      <div className="home__head">
        <motion.div className="home__head-1">
          <motion.h1 className="main__title" variants={fadeInVariants(0)}>
            Hey, I'm
          </motion.h1>
          <motion.img
            src={profileImage}
            alt="🤍"
            className="profile__image"
            variants={fadeInVariants(0.3)} // Slight delay for stagger effect
          />
          <motion.h1 className="main__title" variants={fadeInVariants(1)}>
            Omar
          </motion.h1>
        </motion.div>
        <motion.h1 className="main__title" variants={fadeInVariants(2)}>
          How can I help you?
        </motion.h1>
      </div>

      <motion.div
        className="home__nav"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeInVariants(1)}
        transition={commonTransition}
      >
        <HomeNavElement
          char="A"
          link="/work"
          label="I heard you are designing great apps & websites!"
        />
        <HomeNavElement
          char="B"
          link="/blog"
          label="I like reading about coding & technology!"
        />
        <HomeNavElement char="A" link="/about" label="Omar, who?!" />
      </motion.div>

      <motion.div
        className="home__contact"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants(1)}
        exit="exit"
        transition={commonTransition}
      >
        <span className="home__contact-1">Never Mind -</span>
        <SecondButton link="/contact" label="Just Say Hi" />
      </motion.div>
    </motion.div>
  );
}
