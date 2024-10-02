import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css"; // Optional for custom styling
import SecondButton from "../ui/SecondButton";

const buttonVariants = {
  hidden: { x: -1000, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 1, type: "spring", stiffness: 200, damping: 20 },
      opacity: { duration: 0.5, delay: 0.2 },
    },
  },
  exit: {
    x: 1000,
    opacity: 0,
    transition: {
      x: { duration: 0.5 },
      opacity: { duration: 0.3 },
    },
  },
};


const NotFound = () => {
  return (
    <motion.div
      className="not-found container"
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="main__title">
        <span>404</span> - Page Not Found
      </h1>
      <h2>Sorry, the page you're looking for doesn't exist.</h2>
      <SecondButton label="Go back to Home" link="/" />
    </motion.div>
  );
};

export default NotFound;
