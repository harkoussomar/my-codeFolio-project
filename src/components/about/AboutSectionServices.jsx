import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainButton from "../ui/MainButton";
import AboutSectionService from "./AboutSectionService";

// Services Data
const services = [
  {
    title: "Custom Component Development",
    description:
      "I design and build reusable, scalable, and efficient components tailored to meet the unique requirements of your application. Using React.js, I ensure that the components are modular, easy to maintain, and integrate seamlessly with your existing codebase. This approach reduces development time and enhances code readability and scalability, making future updates more manageable.",
  },
  {
    title: "State Management and Optimization",
    description:
      "Effective state management is key to building a responsive and performant application. With expertise in state management tools like Redux, Context API, and React’s built-in hooks, I ensure that your app's state is efficiently handled. By optimizing state transitions and minimizing unnecessary re-renders, I improve the overall performance and scalability of your application.",
  },
  {
    title: "Responsive Web Design",
    description:
      "Building responsive applications that function flawlessly on different devices is essential for reaching a wide audience. I develop mobile-first, adaptive interfaces using CSS frameworks like Tailwind CSS and tools like Flexbox and Grid. This ensures your app looks great and performs smoothly on various screen sizes, from desktops to smartphones, providing a consistent and engaging user experience.",
  },
  {
    title: "API Integration and Data Handling",
    description:
      "Seamless integration of APIs is crucial for dynamic and data-driven applications. I specialize in connecting React applications to various RESTful APIs endpoints to fetch, display, and manipulate data in real-time. By ensuring efficient data handling and caching mechanisms, I optimize performance while providing a smooth user experience across your app, allowing for real-time updates and interactive features.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3, // Stagger animation for each child
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

export default function AboutSectionServices() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <motion.div
      className="services"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate based on scroll
      variants={containerVariants} // Apply the container animation
    >
      <motion.h2 variants={itemVariants}>On Demand Services</motion.h2>
      <div className="services__items">
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AboutSectionService
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="services__button-container"
        variants={itemVariants}
      >
        <MainButton
          label="Get in Touch"
          link="/contact"
          colorType="secondary"
        />
      </motion.div>
    </motion.div>
  );
}
