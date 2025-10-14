import React from "react";
import "./card.css";
import { useTranslation } from "react-i18next";
const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="container objctnid">
   
      <div className="section proreve">
        <div className="text">
          <h3>{t('Công nghệ nhận dạng')}</h3>
          <p>
          {t('Hơn 60 loại đối tượng được tự động phát hiện trong hình ảnh 360 độ và vị trí thực tế của chúng trên đường phố Việt Nam được tính toán chính xác và hiển thị trên bản đồ.')} 
          </p>
        </div>
        <div className="image">
          <img src="/assets/12-min1.svg" alt="Recognition Technology" />
        </div>
      </div>

  
      <div className="section reverse">
        <div className="text">
          <h3>{t('Biển quảng cáo, biển hiệu')}</h3>
          <p>
          {t('Một trong những tính năng thú vị của Streetview.vn là khả năng tính diện tích, độ cao. Với tính năng này có thể giúp nhanh chóng cung cấp các giải pháp khi cần đo diện tích, chẳng hạn như số tầng của tòa nhà, kích thước biển hiệu cửa hàng, biển quảng cáo,…')}   
          </p>
        </div>
        <div className="image">
          <img src="/assets/centercafe.png" alt="Advertisement" />
        </div>
      </div>

 
      <div className="section proreve">
        <div className="text">
          <h3>{t('Dự báo trước những rủi ro trong hành trình của bạn')}</h3>
          <p>{t('Rất nhiều chướng ngại vật khác nhau trên đường phố, không chỉ gây nguy hiểm cho người lái xe mà còn gây mất an toàn cho người tham gia giao thông. Công nghệ của chúng tôi phát triển nhằm cung cấp các giải pháp để xử lý nhanh chóng những vấn đề này')}
          
          </p>
        </div>
        <div className="image">
          <img src="/assets/Frame.png" alt="Risk Forecast" />
        </div>
      </div>

      <div className="section reverse">
        <div className="text">
          <h3>{t('Hiển thị hình ảnh trùng khớp')}</h3>
          <p>
          {t('Tìm hình ảnh cụ thể của đối tượng và xem ảnh đó được trực quan hóa trên bản đồ, lọc theo thời gian hoặc người đóng góp')}          </p>
        </div>
        <div className="image">
          <img src="/assets/Mockupfillter3601.png" alt="Advertisement" />
        </div>
      </div>
    </div>


    </>
  );
};

export default App;
