import React from "react";
// Core modules imports are same as usual
import ImgCard from "../ImgCard";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";
// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const SwiperCarousel = ({ projects, initialIndex }) => {
  return (
    <div className="swiper-carousel">
      <Swiper
        breakpoints={{
          0: { slidesPerView: "auto" },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 4 },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: false,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <ImgCard
                newTab={project.newTab}
                route={project.route}
                imgPath={project.path}
                sellStatus={project.status}
                title={project.projectName}
                location={project.location}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
