//@ts-nocheck
import './card.css';
import { useTranslation } from 'react-i18next';
const Cardpr = () => {
  const { t } = useTranslation();
  return (
    <div className="app">
      <div className="cardposition">
      <div className="cards-container">
        <div className="cardshome">

          <div className="cardhome cardup">
            <div className="icon">
              <img src="/assets/iconfreecost1.png" alt="" />
            </div>
            <h3>{t('Miễn phí')}</h3>
            <p>{t('Hoàn toàn miễn phí với người dùng cá nhân, nền tảng vừa và nhỏ. Giá thành cạnh tranh phục vụ doanh nghiệp, các nền tảng có nhu cầu sử dụng cao.')}</p>
          </div>

          <div className="cardhome">
            <div className="icon">
              <img src="/assets/iconeco-friendly1.png" alt="" />
            </div>
            <h3>{t('Đội ngũ thu thập dữ liệu trên toàn quốc')}</h3>
            <p>{t('Streetview.vn có đội ngũ cập nhật dữ liệu liên tục đảm bảo độ chính xác và chi tiết của dữ liệu.')}</p>
          </div>

          <div className="cardhome cardup">
            <div className="icon">
              <img src="/assets/speedtest.png" alt="" />
            </div>
            <h3>{t('Tốc độ xử lý dữ liệu nhanh')}</h3>
            <p>{t('Với hệ thống máy chủ đặt tại Việt Nam, Streetview.vn tự tin có tốc độ xử lý dữ liệu hàng đầu thị trường hiện nay.')}</p>
          </div>

          <div className="cardhome">
            <div className="icon">
              <img src="/assets/iconPage.png" alt="" />
            </div>
            <h3>{t('Dữ liệu chính xác và đa dạng')}</h3>
            <p>{t('Hiển thị hình ảnh và vị trí của các đối tượng giao thông trên đường phố.')}</p>
          </div>
        </div>

        <div className="headerhome">
          <h2>{t('Tiếp cận đường phố qua')} <span className="highlight"> {t('ống kính 360 độ')}</span></h2>
          <h1></h1>
          <p>{t('Đem lại cảm giác chân thực như đang di chuyển trên các cung đường')}</p>
        </div>
      </div>
    </div></div>
  );
}

export default Cardpr;
