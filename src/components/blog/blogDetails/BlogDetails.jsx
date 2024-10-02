import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./blogDetails.css";

import { blogsData } from "./blogsData";
import { convertToPath } from "../../../utils/utils";
import NotFound from "../../notFound/NotFound";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const scrollSectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlogDetails = () => {
  const { param } = useParams();

  const blogData = path => {
    const blog = blogsData.find(blog => blog.path === path);
    return blog || null;
  };

  const blog = blogData(param);

  if (!blog) {
    return <NotFound />;
  }

  // Separate refs for different sections
  const [refIntro, inViewIntro] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refFeatures, inViewFeatures] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refConclusion, inViewConclusion] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="blog__details container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="main__title blog__details-title"
        variants={containerVariants}
      >
        {blog.name}
      </motion.h1>

        <motion.img
          className="blog__image"
          src={blog.image}
          alt={`Blog image`}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />

      <motion.div className="blog__details-card" variants={containerVariants}>
        <h2 className="blog__details-subtitle">Table of Contents</h2>
        <ul className="blog__details-card-list-links">
          {blog.tableOfContents.map((item, index) => (
            <li key={index}>
              <a
                href={`#${convertToPath(item)}`}
                className="blog__details-section-title"
                onClick={e => handleSmoothScroll(e, convertToPath(item))}
              >
                <span className="blog__details-section-title-dote"></span>
                <span className="blog__details-section-title-item">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="blog__details-card"
        id="introduction"
        ref={refIntro}
        initial="hidden"
        animate={inViewIntro ? "visible" : "hidden"}
        variants={scrollSectionVariants}
      >
        <h2 className="blog__details-subtitle">Introduction</h2>
        <p>{blog.introduction.description}</p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="blog__details-card"
        id="features"
        ref={refFeatures}
        initial="hidden"
        animate={inViewFeatures ? "visible" : "hidden"}
        variants={scrollSectionVariants}
      >
        <ul className="blog__details-card-list">
          {blog.features.map((item, index) => (
            <li
              key={index}
              className="blog__details__features-item"
              id={convertToPath(item.name)}
            >
              <h2>{item.name}</h2> <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Conclusion Section */}
      <motion.div
        className="blog__details-card"
        id="conclusion"
        ref={refConclusion}
        initial="hidden"
        animate={inViewConclusion ? "visible" : "hidden"}
        variants={scrollSectionVariants}
      >
        <h2 className="blog__details-subtitle">Conclusion</h2>
        <p>{blog.conclusion}</p>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetails;
