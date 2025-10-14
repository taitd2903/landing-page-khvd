import './index.css';
import Bannerft from "../image3d/bannerft/bannerft";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';

const Index = () => {
  const { t } = useTranslation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 780);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActiveLink = (path: string) => {
    return path === location.pathname;
  };

  return (
    <>
      <div className="bgrctnglt">
        <div className="container">

          <div className="containertopglt">
            <h2>
              <span>{t('MÃ HÓA ĐỊA LÝ')}</span> <br />
              {t('CHUYỂN ĐỔI GIỮA ĐỊA CHỈ VÀ TỌA ĐỘ DỄ DÀNG')}
            </h2>

            <p>
              {t('Mã hóa địa lý giúp bạn dễ dàng chuyển đổi giữa địa chỉ và tọa độ một cách nhanh chóng và chính xác. Với công nghệ tiên tiến, việc xác định vị trí hoặc tìm đường đi chưa bao giờ trở nên đơn giản đến thế. Khám phá giải pháp này để nâng cao trải nghiệm của bạn trong việc định vị và khám phá thế giới xung quanh!')}
            </p>

            <button className='buttongeolocation'>
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://www.streetview.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className={isActiveLink('/map') ? 'active' : ''}
              >
                {t('Khám Phá Bản Đồ')}
              </a>
            </button>
          </div>

          <div className="imgautoglt">
            <img
              src={isSmallScreen ? "/assets/item 5.png" : "/assets/item 5.svg"}
              alt=""
              className='geolocationimg'
            />
          </div>
        </div>
      </div>

      <div className="container">
        <section className="section-devices">
          <h2 style={{ marginBottom: '60px' }}>
            {t('Trải Nghiệm Streetview.vn Trên Mọi Thiết Bị')}
          </h2>

          <div className="device-options">
            <div className="device-option">
              <img src="/assets/domain2.png" alt="Website Icon" />
              <h3>{t('Xác định vị trí chính xác')}</h3>
              <p>
                {t('Mã hóa địa lý giúp chuyển đổi địa chỉ thành tọa độ (kinh độ và vĩ độ), cho phép các ứng dụng xác định chính xác vị trí trên bản đồ. Điều này rất hữu ích trong việc tìm đường, điều hướng, hoặc tính khoảng cách giữa các địa điểm.')}
              </p>
            </div>

            <div className="device-option">
              <img src="/assets/iphone2.png" alt="Mobile Icon" />
              <h3>{t('Hỗ trợ nhiều định dạng và ngôn ngữ địa phương')}</h3>
              <p>
                {t('Mã hóa địa lý của Streetview.vn có phạm vi bao phủ toàn Việt Nam, cho phép người dùng chuyển đổi địa chỉ và tọa độ một cách chính xác ở mọi tỉnh thành. Hỗ trợ nhiều định dạng địa chỉ, từ địa chỉ cụ thể, tên đường đến tên doanh nghiệp, đồng thời nhận diện tốt các ngôn ngữ và cách viết địa phương.')}
              </p>
            </div>

            <div className="device-option magin0pro">
              <img src="/assets/laptop2.png" alt="Desktop Icon" />
              <h3>{t('Tìm kiếm ngược từ tọa độ')}</h3>
              <p>
                {t('Khi có tọa độ, mã hóa ngược sẽ chuyển đổi tọa độ thành địa chỉ cụ thể. Điều này giúp các ứng dụng xác định địa điểm người dùng hiện tại, cung cấp dịch vụ liên quan hoặc hiển thị địa chỉ chi tiết.')}
              </p>
            </div>
          </div>
        </section>
      </div>

      <Bannerft />
    </>
  );
};

export default Index;
