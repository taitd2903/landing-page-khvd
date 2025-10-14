import "./banner.css";
import { useTranslation } from 'react-i18next';

const LocationSection = () => {
  const { t } = useTranslation();
  const isActiveLink = (path: string) => {
    return path === location.pathname;
  };
  return (
    <>
    <div className="bgrclmap">
    <div className="container">
    <div className="location-section">
      <div className="contentmap">
        <h2 className="titlemap">{t('Vị trí lý tưởng')}</h2>
        <ul className="descriptionmap">
          <li>
          {t('Gợi ý những địa điểm nổi bật trong khu vực của bạn, giúp bạn khám phá và truy cập nhanh những địa điểm tuyệt vời nhất.')} 
          </li>
          <li>
          {t('Mọi thông tin chi tiết bạn cần trên bản đồ đều có thể dễ dàng tìm thấy ở dạng mới nhất thông qua quá trình xử lý hình ảnh đường phố. Công nghệ này cho phép người dùng không chỉ có cái nhìn tổng quan về địa điểm mà còn cung cấp chi tiết cụ thể như tên đường, cửa hàng, và các điểm mốc quen thuộc với độ chính xác cao.')} 
         
          </li>
          <li>
          {t('Nhờ vào trí tuệ nhân tạo và máy học, hệ thống có khả năng cập nhật và cải thiện dữ liệu liên tục, đảm bảo rằng thông tin luôn mới nhất và đáng tin cậy.')}
          </li>
        </ul>
        <div className="buttons">
          <button className="map-button"><a style={{color:"white", textDecoration:"none"}}
              href="https://www.streetview.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className={isActiveLink('/map') ? 'active' : ''}
            >
            {t('Khám Phá Bản Đồ')} 
            </a></button>
          <button className="contact-button"><a style={{color: "var(--Primary-Cyan-primary, rgba(20, 184, 166, 1))"
, textDecoration:"none"}} href="/contact">{t('Liên hệ với chúng tôi')}</a></button>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/assets/maplocation.png"
          alt="Map Illustration"
          className="illustration"
        />
      </div>
    </div>
    </div>
    </div>
    <div className="container">
        <center>
        <h2 className="maphomeh2">{t('Dễ dàng tìm kiếm')}</h2>
        <p>{t('Các điểm nổi bật được thể hiện bằng hình ảnh trực quan và đánh dấu vị trí trên bản đồ của chúng tôi.')}
       <br /> {t('Ngoài ra, bạn có thể tạo các điểm tùy ý để làm nổi bật vị trí của mình')}</p>
      </center> 
   
    </div>   <div className="ingctn">
      <center><img className="mapmap" src="/assets/macmap.png" alt="" /></center> 
       </div>
    </>);
};

export default LocationSection;
