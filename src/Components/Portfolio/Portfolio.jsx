import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import portfolio1 from "../../assets/3.png";
import portfolio2 from "../../assets/2.png";
import portfolio3 from "../../assets/1.png";
import portfolio4 from "../../assets/4.png";
const Portfolio = () => {
  return (
    //   hedaing
    <div className="portfolio">
      <span>Recent Project</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={portfolio1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
