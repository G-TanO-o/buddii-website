import React from "react";
import Slider from "react-slick";

import "./slider.scss"

function Carousel({ data }) {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider_ipad">
      <Slider {...settings}>
        {data.map((slide, index) => (
          <img key={index} src={slide} alt="slide presentatie" height="600" />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;





