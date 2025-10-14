import "./index.css";
import { useTranslation } from "react-i18next";
const App = () => {
  const { t } = useTranslation();
  return (
    <div className="grid-container">

      <div className="grid-section grid-top-section">
        <div className="grid-left">
          <h2>{t('Quản lý mạng lưới điện')}</h2>
          <p>
          {t('Sử dụng công nghệ thị giác số nhận dạng rủi ro để đảm bảo truyền năng lượng an toàn và không bị gián đoạn.')} 
          </p>
        </div>
        <div className="grid-right">
          <img
            src="/assets/mocklaptop1.png"
            alt="Quản lý mạng lưới điện"
            className="grid-image"
          />
        </div>
      </div>


      <div className="grid-section grid-row">
        <div className="grid-image-container">
          <img
            src="/assets/MapCameraSection1.png"
            alt="Phát hiện khu vực có vấn đề"
          />
        </div>
        <div className="grid-text">
          <h3>{t('Phát hiện khu vực có vấn đề trên bản đồ')}</h3>
          <p>
          {t('Streetview.vn hỗ trợ phát hiện rủi ro của mạng lưới điện từ hình ảnh thu thập được. Đây là giải pháp giúp tối ưu hóa chi phí và thời gian xử lý sự cố.')} 
          </p>
        </div>
      </div>


      <div className="grid-section grid-row">
        <div className="grid-text">
          <h3>{t('Quản lý đường truyền năng lượng')}</h3>
          <ul>
            <li>
            {t('Đây là bước cần thiết trong việc quản lý đường truyền và các trạm năng lượng.')}
            </li>
            <li>
            {t('Giám sát lường trước các rủi ro tiềm ẩn để đảm bảo việc sử dụng năng lượng không bị gián đoạn.')} 
            </li>
          </ul>
        </div>
        <div className="grid-image-container">
          <img
            src="/assets/CameraSection.png"
            alt="Quản lý đường truyền"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
