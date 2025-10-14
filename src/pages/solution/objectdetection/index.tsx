import React from "react";
import "./index.css";
import Card from "./card/card";
import { useTranslation } from "react-i18next";
const IdealLocation: React.FC = () => {
  const { t } = useTranslation();
  return (<>
  <div className="divbgrobj">
    <div className="container">
    <div className="ideal-location-container">
      <div className="contentproo">
        <h2 className="titleobj">{t('Phát hiện và phân tích đối tượng')}</h2>
      <p>{t('Công nghệ độc quyền giúp nhận dạng các đối tượng được đào tạo từ hình ảnh, diện tích, chiều rộng và chiều cao của chúng với độ chính xác lên tới cm.')}</p>
            <div className="imgunboj"><img src="/assets/11-min-21.svg" alt="" /></div>
      </div>
      <div className="image">
        <img
          src="/assets/11-min1.svg"
          alt="Map illustration"
          className="map-illustration"
        />
      </div>
    </div>
    </div></div>

    <div className="container objctnid">
        <div className="mainideal">
        <h2 >{t('Hoàn thiện ứng dụng')}</h2>
        <p>{t('Công nghệ & giải pháp thông minh  dựa trên hình ảnh 360* cấp độ đường phố')}</p>

   </div> 
   </div>
   <Card/>

   <div className="container objctnid">
        <div className="mainideal">
        <h3 >{t('Dữ liệu luôn được cập nhật nhanh nhất')}</h3>
        <p>{t('Chúng tôi luôn cam kết cập nhật dữ liệu liên tục và nhanh nhất để đảm bảo độ chính xác dư liệu')}</p>

   </div> 
   </div>
    </>
  );
};

export default IdealLocation;
