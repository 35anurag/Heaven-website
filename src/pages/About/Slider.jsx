import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

const SliderData = [
  {
    id: 1,
    text: "Egestas tincidunt arcu pellentesque tortor vulputate. Diam nulla sollicitudin diam, rhoncus cursus faucibus mus ornare. Ut tincidunt ut eu amet sit ut magna.",
    author: "ESTHER HOWARD",
  },
  {
    id: 2,
    text: "Tincidunt ante faucibus in dui quam aliquam integer nunc neque. Augue in nullam urna nulla. Hac nisi habitant elementum cras duis placerat egestas nisl. Vestibulum molestie tellus facilisi id. Sed id.",
    author: "HARRY POTTER",
  },
  {
    id: 3,
    text: "Another testimonial text. This is for demonstration purpose.",
    author: "JOHN DOE",
  },
];

const Slider = () => {
  return (
    <div className="testimonial-slider">
      <h2>WHAT OUR CLIENTS SAY ABOUT US</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div>
          {SliderData.map((index) => (
            <SwiperSlide id={index} className="slider_div">
              <p className="slider_paragraph">{index.text}</p>
              <h2 className="slider_heading">{index.author}</h2>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
