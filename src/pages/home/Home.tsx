import  { useState, useEffect } from "react";
import "./home.css";
import Card from "./cards/card";
import Container from "./container/container";
import Cardft from "./cardft/cardft";
import { useTranslation } from 'react-i18next';


const StreetView = () => {
  const isActiveLink = (path: string) => {
    return path === location.pathname;
  };
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>

      <div className="procl">
        <div className="container containerhome">
          <div className="container1">
            <div className="imagehome">
              <img
                src={isSmallScreen ? "/assets/0-min1.png" : "/assets/banner.svg"}
                alt="Streetview Illustration"
                className="street-image"
              />
            </div>
            <div className="text-sectionhome">
              <h1 className="texth1">
                <span className="green">{t('TRỢ LÝ ẢO THÔNG MINH')}</span>
                <br />
                <span className="black">{t('TRÊN CÁC TUYẾN ĐƯỜNG')}</span>
              </h1>
              <p className="descriptionhome">
              {t("Bản đồ Streetview.vn đi đầu tại Việt Nam trong việc tạo ra những dữ liệu bản đồ thông minh và hình ảnh đường phố chi tiết tới cấp độ ngõ ngách.")}
               
                <br /><br />
                 <button className="explore-buttonpro">
                  <a
              href="https://www.streetview.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className={isActiveLink('/map') ? 'active' : ''}
            >
             {t('Khám phá bản đồ')} 
            </a>
              </button> </p>
          
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Card />
      </div>
      <div className="done">
        <Container />
      </div>
      <div className="cartft">
        <Cardft />
      </div>
    </>
  );
};

export default StreetView;
