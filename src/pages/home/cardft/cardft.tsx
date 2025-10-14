import './cardft.css';
// import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
const Pricing=()=> {
  const { t } = useTranslation();
return (
<div className="pricing-container">
<h1>{t('Chọn gói hoàn hảo cho bạn')}</h1>
      <p className="subtitle">
       {t('Streetview cung cấp ba gói giá linh hoạt để đáp ứng nhu cầu riêng của bạn:')} 
      </p>
      <div className="pricing-cards">
        <div className="cardft">
          <h2>Free</h2>
        <p className="price">0₫</p>
          <p className="requests"> <span className='xanh'>5</span> {t('yêu cầu/s')}, <span className='xanh'>1000</span> {t('yêu cầu/ngày')}</p>
          <p className="description">
          {t('Mong muốn được đóng góp cho sự phát triển của các kỹ lân tương lai tại Việt Nam cũng như sự phát triển của các công nghệ thân thiện môi trường.')}  
          </p>
          <button className="explore-button"><a href="/contact">{t('Liên Hệ')}</a></button>
          <p className="section-title">{t('Danh sách API')}</p>
          <ul className="features">
            <li> <img src="/assets/check.png" alt=""className='checkcl' /> Dynamic Maps  <div style={{marginLeft:'5px'}}></div></li>
            <li><img src="/assets/check.png" alt="" className='checkcl' />Static Maps  <div style={{marginLeft:'5px'}}></div></li>
          </ul>
          <p className="section-title">{t('Khác')}</p>
          <ul className="features">
            <li><img src="/assets/check.png" alt="" className='checkcl'/>{t('Đầy đủ tính năng cơ bản')}</li>
            <li className='lammo'><img src="/assets/clear-circle.png" alt="" className='clearcl'/>{t('Hỗ trợ ưu tiên: Email, Chat, Hotline')}</li>
            <li className='lammo'><img src="/assets/clear-circle.png" alt=""className='clearcl' />{t('Dữ liệu cơ bản, cập nhật theo hệ thống')}</li>
            <li className='lammo'><img src="/assets/clear-circle.png" alt="" className='clearcl'/>{t('Tùy chỉnh theo yêu cầu tích hợp')}Tùy chỉnh theo yêu cầu tích hợp</li>
          </ul>
          </div>
        <div className="cardft">
          <h2>Business</h2>
          <p className="price"><span>{t('Từ')}</span> 1.000.000₫</p>
          <p className="requests"><span className='xanh'>10</span> {t('yêu cầu/s')}, <span className='xanh'>20,000</span> {t('yêu cầu/ngày')}</p>
          <p className="description">
          {t('Đảm bảo sự hài lòng của khách hàng với bản đồ số chất lượng cao cùng gói dịch vụ được thiết kế riêng cho doanh nghiệp và nền tảng tầm trung.')}  
          </p>
          <button className="explore-button"><a href="/contact">{t('Liên Hệ')}</a></button>
          <p className="section-title">{t('Danh sách API')}</p>
         <ul className="features">
           <li><img src="/assets/check.png" alt="" className='checkcl'/>Dynamic Maps  <div style={{marginLeft:'5px'}}></div></li>
           <li><img src="/assets/check.png" alt="" className='checkcl'/>Static Maps  <div style={{marginLeft:'5px'}}></div></li>
           {/* <li><img src="/assets/check.png" alt="" className='checkcl'/>Static Maps  <div style={{marginLeft:'5px'}}></div><Tooltip title="prompt text"><img src="/assets/information.png" alt="" /></Tooltip> </li> */}

         </ul>
         <p className="section-title">{t('Khác')}</p>
          <ul className="features">
            <li><img src="/assets/check.png" alt=""className='checkcl' />{t('Công nghệ và dữ liệu mới nhất')}</li>
            <li><img src="/assets/check.png" alt=""className='checkcl' />{t('Hỗ trợ: Email')}</li>
            <li className='lammo'><img src="/assets/clear-circle.png" alt="" className='clearcl'/>{t('Dữ liệu cập nhật theo hệ thống')}</li>
            <li className='lammo'><img src="/assets/clear-circle.png" alt="" className='clearcl'/>{t('Tùy chỉnh theo tài liệu tích hợp')}</li>
          </ul>
        </div>


        <div className="cardft">
          <h2>Pro+</h2>
          <p className="price">{t('Yêu cầu báo giá')}</p>
          <p className="requests">{t('Lượng yêu cầu')} <span className='xanh'>{t('không giới hạn')}</span></p>
          <p className="description">
          {t('Cam kết bạn nhận được chất lượng dịch vụ như các Big-tech cung cấp, chúng tôi sở hữu toàn bộ công nghệ và hạ tầng, tối ưu về chi phí dự án của bạn.')}   
          </p>
          <button className="explore-button"><a href="/contact">{t('Liên Hệ')}</a></button>

          <p className="section-title">{t('Danh sách API')}</p>
          <ul className="features">
            <li><img src="/assets/check.png" alt="" className='checkcl'/>Dynamic Maps <div style={{marginLeft:'5px'}}></div></li>
            <li><img src="/assets/check.png" alt="" className='checkcl'/>Static Maps <div style={{marginLeft:'5px'}}></div></li>
          </ul>

          <p className="section-title">{t('Khác')}</p>
          <ul className="features">
            <li><img src="/assets/check.png" alt=""className='checkcl'/>{t('Tất cả sự tối tân nhất về Công nghệ, Giải pháp, Dữ Liệu')}</li>
            <li><img src="/assets/check.png" alt="" className='checkcl'/>{t('Ưu tiên: Email, Chat, Hotline')}</li>
            <li><img src="/assets/check.png" alt="" className='checkcl'/>{t('Dữ liệu sử dụng toàn diện, cập nhật theo ngày')}</li>
            <li><img src="/assets/check.png" alt="" className='checkcl'/>{t('Tùy chỉnh theo yêu cầu')}</li>
            <li><img src="/assets/check.png" alt="" className='checkcl'/>{t('Hạ tầng hiệu suất tối đa, thời gian phản hồi ms với uptime 99.9%')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
