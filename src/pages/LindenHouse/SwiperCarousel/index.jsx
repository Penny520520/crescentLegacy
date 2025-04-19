import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

export default function SwiperCarousel({ projects, initialIndex }) {
  return (
    <div className="swiper-carousel-project">
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={project.path} alt="gallery" />
              {project.caption && <p>{project.caption}</p>}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
