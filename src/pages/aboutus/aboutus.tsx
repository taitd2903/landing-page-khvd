//@ts-nocheck
import './aboutus.css';
import Card from '../aboutus/card/card';
import Banner from '../aboutus/banner/bannerab';
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const AboutPage = () => {
  const isActiveLink = (path: string) => location.pathname === path;
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
    <Banner/>
      <div className="container ctnprooab">
        <section className="about">
          <div className="about-text">
            <h1 className="title-green">{t('VỀ STREETVIEW.VN')}</h1>
            <h1 className="main-title">{t('Sứ Mệnh & Tầm Nhìn')}</h1>
            <p>
            {t('Streetview.vn là công ty hàng đầu tại Việt Nam chuyên cung cấp các giải pháp bản đồ số, phục vụ nhu cầu đa dạng của các doanh nghiệp và cá nhân.')}
            </p>
            <p>
            {t('Với sứ mệnh đưa công nghệ bản đồ số tới gần hơn với đời sống, Streetview.vn không chỉ giúp tối ưu hoá hoạt động quản lý và vận hành mà còn tạo điều kiện thuận lợi cho người dùng trong việc tìm kiếm, di chuyển và khám phá địa điểm.')}
            </p>
            <div className="proct">
            <button className="chat-button">
              <a href="/contact"> {t('Chat với chúng tôi')}</a>
          </button>  
         <img src="/assets/_leading.png" alt="" /> 
            <a className="tellabu" href="tel:+84838777777">
    <span className="stdab">+84-838-777-777</span>
</a>
</div>
          </div>
          
          <div className="about-images">
            <div className="main-image">
            <img src="/assets/imgabup.png" alt="Nhóm Streetview" />
            </div>
            <div className="stat">
              <span>110.000+ KM</span>
              <p className='statp'>{t('đã thu thập')}</p>
            </div>
            <div className="sub-image">
              <img src="/assets/imgabd.png" alt="Đoạn đường thu thập" />
            </div>
          </div>

          {/* <div className="imgabu"><img src="/assets/Frame1234568826.png" alt="" /></div> */}
        </section>
        
       
      </div>
       <section className="why-choose">
        <div className="container">
          <h2 className='ctnh2abu'>{t('TẠI SAO NÊN CHỌN')}<span> STREETVIEW.VN</span>?</h2>
          <p className='ctnpabu'>{t('Lựa chọn hàng đầu cho giải pháp bản đồ số tại Việt Nam')}</p>
          
          <div className="featureab">
            <div className="featureab-card">
              <img src="/assets/mapab.png" alt="" />
              <div className="abmgr"></div>
              <h3>{t('Bản Đồ Số Toàn Diện')}</h3>
              <p>
              {t('Chúng tôi cung cấp bản đồ số hóa toàn diện, bao phủ mọi khu vực trên khắp Việt Nam, giúp người dùng tiếp cận thông tin địa lý chính xác và chi tiết.')}
              </p>
            </div>
            <div className="featureab-card">
            <img src="/assets/Group.png" alt="" />
            <div className="abmgr"></div>
              <h3>{t('Phù Hợp Đa Dạng Ngành Nghề')}</h3>
              <p>
              {t('Streetview.vn phát triển giải pháp bản đồ số phù hợp cho đa dạng ngành nghề, từ giáo dục, y tế, thương mại, giúp doanh nghiệp dễ dàng đạt được các mục tiêu chiến lược.')}
              </p>
            </div>
            <div className="featureab-card">
            <img src="/assets/userab.png" alt="" />
            <div className="abmgr"></div>
              <h3>{t('Đội Ngũ Linh Hoạt')}  <br /> {t('Giàu Kinh Nghiệm')}  </h3>
              <p>
              {t('Đội ngũ nhân sự linh hoạt, giàu kinh nghiệm của Streetview.vn luôn sẵn sàng hỗ trợ các giải pháp bản đồ số, đảm bảo an toàn và hiệu quả cao nhất cho khách hàng.')}
              </p>
            </div>
          </div></div>
        </section>
      <div className="giaiphap">
        <h2 className='h2about'>{t('Các Giải Pháp Bản Đồ Streetview.vn')}</h2>
        <img className='servicesab' src= {t('/assets/ServicesContainer.png')} alt="" />
      </div>
      <Card/>
    </>
  );
}

export default AboutPage;
