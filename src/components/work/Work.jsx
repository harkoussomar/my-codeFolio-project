import { motion } from "framer-motion";
import "./work.css";

import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2_1.png";
import Work3 from "../../assets/work4_1.png";
import Work4 from "../../assets/work3_3.png";
import Work5 from "../../assets/work5.png";

import WorkCard from "./WorkCard";

// Work Data
const workData = [
  {
    image: Work1,
    title: "Library Management",
    subtitle: "C App",
    description:
      "The objective of this project is to facilitate the management of books, members, and loans within a library.",
  },
  {
    image: Work2,
    title: "Fast React Pizza",
    subtitle: "Front-End App",
    description:
      "Fast-React-Pizza is a web app for managing pizza orders, built with React.",
  },
  {
    image: Work3,
    title: "WorldWise",
    subtitle: "Front-End App",
    description:
      "WorldWise is a front-end web application built with React that enables users to explore cities and countries worldwide.",
  },
  {
    image: Work4,
    title: "usePopcorn",
    subtitle: "Front-End App",
    description:
      "usePopcorn is a React application designed to help users search for movies, view details about each movie, and manage their watched list.",
  },
  {
    image: Work5,
    title: "Far Away",
    subtitle: "Front-End App",
    description:
      "The Far Away Packing List is a React app that lets users easily manage and organize trip packing by adding, sorting, and deleting items.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // Faster stagger effect
      duration: 0.5, // Quicker duration
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" }, // Reduced duration
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeInOut" }, // Quicker card animation
  },
};

export default function Work() {
  return (
    <motion.div
      className="work container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Title Animation */}
      <motion.h1 className="main__title" variants={titleVariants}>
        Folio
      </motion.h1>

      {/* Cards Container */}
      <div className="work__cards">
        {workData.map((workItem, index) => (
          <motion.div key={index} variants={cardVariants}>
            <WorkCard workItem={workItem} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
