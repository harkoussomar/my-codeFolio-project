import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";
import SwiperSlideItem from "./SwiperSlideItem";

// Animation Variants
const swiperVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function SwiperSlideItems() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation once when in view
    threshold: 0.3, // Trigger when 30% of the swiper is in view
  });

  return (
    <motion.div
      className="swiper-container"
      ref={ref} // Attach ref to detect scroll
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Trigger animation on scroll
      variants={swiperVariants} // Apply animation variants
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <SwiperSlideItem />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideItem />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
