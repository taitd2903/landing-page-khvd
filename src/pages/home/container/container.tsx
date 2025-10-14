
import './container.css';
import { useTranslation } from 'react-i18next';
const Done = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="bgrhomecl">
      <h1 className='h1cter'>{t('Hoàn thiện ứng dụng')}</h1>
      <p className="subtitle">{t('Công nghệ & giải pháp thông minh dựa trên hình ảnh 360° cập độ đường phố')}</p>

      <div className="container">

        <div className="section">
          <div className="section-content">
            <h2>{t('Camera chuyên dụng 360°')}<br /> {t('độ phân giải tới 12k')}</h2>
            <p><br /><strong>{t('Chất lượng')}</strong><br /> {t('Streetview.vn đầu tư và sử dụng những thiết bị ghi hình 360° chuyên dụng được lắp trên xe ô tô và xe máy, chứa đựng những công nghệ tiên tiến nhất về hình ảnh toàn cảnh.')}</p>
            <p><br /><strong>{t('Số lượng')}</strong><br />{t('Chất lượng ghi hình lên đến 12K, cung cấp nhiều giá trị khác nhau dưới mỗi khung hình.')}</p>
          </div>
          <div className="section-image imghmu">
            <img src="/assets/5-min1.png" alt="Camera chuyên dụng 360 độ" />
          </div>
        </div>

        <div className="section">
          <div className="section-image">
            <img src="/assets/6-min1.png" alt="Bản đồ và đối tượng nhận dạng" />
          </div>
          <div className="section-content">
            <h2>{t('Chụp đối tượng, nhận dạng và ghi dữ liệu bản đồ')}</h2>
            <p>{t('Hơn 60 loại đối tượng được tự động phát hiện trong hình ảnh 360° và vị trí thực tế của chúng trên đường phố Việt Nam được tính toán chính xác và hiển thị trên bản đồ.')}</p>
            <p>{t('Các loại đối tượng được cập nhật với tần suất mới liên tục để đảm bảo phù hợp với tốc độ phát triển của cơ sở hạ tầng giao thông ở Việt Nam.')}</p>
          </div>
        </div>


        <div className="imgcar" style={{ textAlign: "center" }}>
          <img src="/assets/oto11.png" alt="Xe chụp hình 360 độ" className='oto11' />
        </div>
        <div className="section-content"><h2>{t('Công nghệ')}</h2></div>

        <div className="section">
          <div className="section-content">
            <h3>{t('Công nghệ lưu trữ')}</h3>
            <p>{t('Hệ thống lưu trữ dữ liệu lớn và máy chủ truy xuất dữ liệu hiện đại được đặt toàn bộ ở Việt Nam.')}</p>
          </div>
          <div className="section-content">
            <h3>{t('Công nghệ xử lý')}</h3>
            <p>{t('Công nghệ xử lý Tracking GPS Snap vào ứng dụng thực tế vị trí GPS rác, dựa trên OpenMapVN Editor.')}</p>

          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Done;
