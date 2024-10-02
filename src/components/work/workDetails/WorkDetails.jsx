import { useParams } from "react-router-dom"; // <-- Add this line
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./workDetails.css";

import MainButton from "../../ui/MainButton";
import { projectsData } from "./projectsData";
import { convertToPath } from "../../../utils/utils";

import NotFound from "../../notFound/NotFound";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const swiperVariants = {
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

const WorkDetails = () => {
  const { param } = useParams(); // Now useParams is defined

  const projectData = path => {
    const project = projectsData.find(project => project.path === path);
    return project || null;
  };

  const project = projectData(param);

  if (!project) {
    return <NotFound />;
  }

  // For scroll-triggered animations
  const [refIntro, inViewIntro] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refFeatures, inViewFeatures] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refServices, inViewServices] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refTechnologies, inViewTechnologies] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Smooth scrolling for the Table of Contents
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="work__details container"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Animation for route entry
    >
      <motion.h1
        className="main__title work__details-title"
        variants={containerVariants}
      >
        {project.name}
      </motion.h1>

      {/* Swiper Section */}
      <motion.div
        className="swiper__container"
        initial="hidden"
        animate="visible"
        variants={swiperVariants} // Animation for swiper
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {project.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                className="swipe__image"
                src={item}
                alt={`Project image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Table of Contents */}
      <motion.div className="work__details-card" variants={containerVariants}>
        <h2 className="work__details-subtitle">Table of Contents</h2>
        <ul className="work__details-card-list-links">
          {project.tableOfContents.map((item, index) => (
            <li key={index}>
              <a
                href={`#${convertToPath(item)}`}
                className="work__details-section-title"
                onClick={e => handleSmoothScroll(e, convertToPath(item))} // Smooth scrolling
              >
                <span className="work__details-section-title-dote"></span>
                <span className="work__details-section-title-item">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="work__details-card"
        id="introduction"
        ref={refIntro} // Scroll-triggered animation for intro section
        initial="hidden"
        animate={inViewIntro ? "visible" : "hidden"}
        variants={scrollSectionVariants}
      >
        <h2 className="work__details-subtitle">Introduction</h2>
        <p>{project.introduction.description}</p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="work__details-card"
        id="features"
        ref={refFeatures} // Scroll-triggered animation for features section
        initial="hidden"
        animate={inViewFeatures ? "visible" : "hidden"}
        variants={scrollSectionVariants}
      >
        <h2 className="work__details-subtitle">Features</h2>
        <ul className="work__details-card-list">
          {project.features.map((item, index) => (
            <li key={index} className="work__details__features-services-item">
              <h3>{item.name}</h3> <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="work__details-card"
        id="services"
        ref={refServices} // Scroll-triggered animation for services section
        initial="hidden"
        animate={inViewServices ? "visible" : "hidden"}
        variants={scrollSectionVariants}
      >
        <h2 className="work__details-subtitle">Services</h2>
        <ul className="work__details-card-list">
          {project.services.map((item, index) => (
            <li key={index} className="work__details__features-services-item">
              <h3>{item.name}</h3> <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Technologies Used Section */}
      <motion.div
        className="work__details-card"
        id="technologies-used"
        ref={refTechnologies} // Scroll-triggered animation for technologies section
        initial="hidden"
        animate={inViewTechnologies ? "visible" : "hidden"}
        variants={scrollSectionVariants}
      >
        <h2 className="work__details-subtitle">Technologies used</h2>
        <ul className="work__details-card-list">
          {project.technologiesUsed.map((item, index) => (
            <li key={index} className="work__details__features-services-item">
              <h3>{item.name}</h3> <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="button__container">
        <MainButton to="#" label="Visite Project" />
      </div>
    </motion.div>
  );
};

export default WorkDetails;
