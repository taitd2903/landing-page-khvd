
import { Carousel } from "antd";

import "./index.css";

const Sliderhome = () => {



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
      <img src={slide.img} alt={`slide-${slide.id}`} className="slide-image" />
    </div>
  ))}
</Carousel>

    </div>
  );
};

export default Sliderhome;
