import { useState, useEffect } from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import "./index.css";

const Sliderhome = () => {
  const { t } = useTranslation();


  const slides = [
    {
      id: 1,
      img: "https://yasuda-method.com/wp/wp-content/themes/yasuda/images/top/slide02.jpg",
   
    },
    {
      id: 2,
      img: "https://yasuda-method.com/wp/wp-content/themes/yasuda/images/top/slide01.jpg",
  
    },
    {
      id: 3,
      img: "https://yasuda-method.com/wp/wp-content/themes/yasuda/images/top/slide03.jpg",
  
    }
  ];

  return (
    <div className="slider-home">
      <Carousel autoplay effect="fade">
        {slides.map((slide) => (
          <div key={slide.id} className="slide-item">
            <img src={slide.img} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Sliderhome;
