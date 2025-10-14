import './index.css';
import { useTranslation } from "react-i18next";
const Index = () => {
const { t } = useTranslation();  
  return (
    
    <>
      <div className="bgrslf">
        <div className="container">
          <div className="textslf">
            <h2>{t('Giải pháp xe tự hành')}</h2>
            <p>{t('Đào tạo các mô hình nhận thức trực quan với bộ dữ liệu phong phú về cảnh đường phố và biển báo giao thông từ khắp nơi')}</p>
            <div className="imgslf">
              <img src="/assets/imagehero.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="textslf">
          <h2>{t('Công nghệ của chúng tôi')}</h2>
          <div className="centelslf">
            <ul>
              <li>
              {t('Streetview.vn chỉ sử dụng công nghệ xử lý hình ảnh và thị giác số mà không cần sử dụng phần cứng đắt tiền (Lidar, Radar, v.v.).')}  
              </li>
              <li>
              {t('Nó tự động nhận diện dữ liệu nhạy cảm theo thời gian thực về môi trường xung quanh bằng cách xử lý hình ảnh từ camera trên xe chuyên dụng.')}  
              </li>
              <li>
              {t('Bao gồm: phát hiện điểm mù, hệ thống theo dõi đường xá, tất cả thông tin về ROAS (hố gas, biển báo giao thông, lối đi dành cho người đi bộ, v.v.)')}</li>
            </ul>
            </div>
          <img className='textslfimg' src="/assets/mapdata.png" alt="" />
        </div>

      </div>
      

      <div className="obj-container">
      <div className="obj-row">
        <div className="obj-text">
          <h3>{t('Mô hình nhận thức thị giác có độ chính xác cao')}</h3>
          <p>
          {t('Công nghệ thị giác máy tính cung cấp dữ liệu chính xác nhất cho xe tự hành bất kể điều kiện thời tiết, mức độ ánh sáng, mưa, góc chụp.')}
          </p>
        </div>
        <div className="obj-image">
          <img
            src="/assets/12-min1.svg"
            alt="Mô hình thị giác"
          />
        </div>
      </div>

 
      <div className="obj-row">
        <div className="obj-image">
          <img
            src="/assets/MapCameraSection.png"
            alt="Bản đồ"
          />
        </div>
        <div className="obj-text">
          <h3>{t('Tạo ra tuyến đường phù hợp với bạn nhất')}</h3>
          <ul>
            <li>
            {t('Từ bộ thông tin dữ liệu đường phố của mình, Streetview.vn sẽ giúp bạn tối ưu hóa tuyến đường cho xe tự hành đảm bảo rằng đó là tuyến đường an toàn và phù hợp với hoàn cảnh và điều kiện tại thời điểm đó.')} 
            </li>
            <li>
            {t('Hệ thống này sẽ giúp bạn có một trải nghiệm tốt nhất trên các cung đường.')}
            </li>
          </ul>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Index;
