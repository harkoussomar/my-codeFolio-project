import { motion } from "framer-motion";
import "./contact.css";
import profileImage from "../../assets/profile.png";
import MainButton from "../ui/MainButton";
import SecondButton from "../ui/secondButton";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <motion.div
      className="contact container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title and Subtitle */}
      <motion.h1 className="main__title" variants={containerVariants}>
        The platform is yours
      </motion.h1>
      <motion.p className="contact__subtitle" variants={containerVariants}>
        Ready to bring your vision to life? Let’s create something amazing
        together—reach out and let’s get started!
      </motion.p>

      {/* Contact Info */}
      <motion.div className="contact__info" variants={containerVariants}>
        <motion.img
          src={profileImage}
          alt="profile picture"
          className="contact__info-image"
          variants={imageVariants} // Animate profile image
        />
        <motion.div className="contact__info-info" variants={containerVariants}>
          <h2>Omar Harkouss</h2>
          <span>Front-End Developer</span>
        </motion.div>
        <motion.div
          className="contact__info-links"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants}>
            <MainButton
              link="mailto:harkouss.omar@gmail.com"
              label="Drop an E-Mail"
              newTab={true}
            />
          </motion.div>
          <motion.div variants={buttonVariants}>
            <MainButton
              link="https://api.whatsapp.com/send?phone=+212773757981&text=Hello, more information !"
              label="Have a call"
              newTab={true}
            />
          </motion.div>
          <motion.div variants={buttonVariants}>
            <MainButton
              link="https://m.me/crypticalcoder"
              label="Messenger"
              newTab={true}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer Links */}
      <motion.footer className="contact__footer" variants={containerVariants}>
        <motion.div variants={buttonVariants} className="secondButton__container">
          <SecondButton
            link="https://x.com/OHarkouss?t=N3vtQUeeRafrgA09tUHLww&s=09"
            label="Twitter"
            newTab={true}
          />
        </motion.div>
        <motion.div variants={buttonVariants}  className="secondButton__container">
          <SecondButton
            link="https://www.instagram.com/harkoussomar/"
            label="Instagram"
            newTab={true}
          />
        </motion.div>
        <motion.div variants={buttonVariants} className="secondButton__container">
          <SecondButton
            link="https://www.linkedin.com/in/omar-harkouss-2071b9304?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BStEjXbmsRRK4552%2FRVvNkQ%3D%3D"
            label="Linkedin"
            newTab={true}
          />
        </motion.div>
      </motion.footer>
    </motion.div>
  );
}
