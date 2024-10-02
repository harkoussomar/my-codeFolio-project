import { motion } from "framer-motion";
import "./blog.css";
import BlogCard from "./BlogCard";

import blogImage1 from "../../assets/blog1.webp";
import blogImage2 from "../../assets/blog2.webp";
import blogImage3 from "../../assets/blog3.webp";
import blogImage4 from "../../assets/blog4.webp";

export const blogData = [
  {
    image: blogImage1,
    title: "AI: Your Guide to Reducing Work Time and Boosting Efficiency",
    type: "AI",
    date: "05/10/2024",
    path: "ai-guide",
  },
  {
    image: blogImage2,
    title:
      "Understanding Caching in JavaScript and React: Boosting Performance",
    type: "Web Development",
    date: "12/10/2024",
    path: "js-caching",
  },
  {
    image: blogImage3,
    title: "The Mathematical Foundations of Computer Science",
    type: "Computer Science",
    date: "18/10/2024",
    path: "math-computer-science",
  },
  {
    image: blogImage4,
    title: "Mastering State Management in React: Tools and Techniques",
    type: "ReactJS",
    date: "25/10/2024",
    path: "state-management-react",
  },
];


// Animation Variants for Blog Container and Title
const containerVariants = {
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

const titleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Blog() {
  return (
    <motion.div
      className="blog container"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Apply animation to the blog container
    >
      {/* Title Animation */}
      <motion.h1 className="main__title" variants={titleVariants}>
        Thoughts
      </motion.h1>

      {/* Blog Cards (No Animation Applied) */}
      <div className="blog__cards">
        {blogData.map((blogItem, index) => (
          <BlogCard blogItem={blogItem} key={index} />
        ))}
      </div>
    </motion.div>
  );
}
