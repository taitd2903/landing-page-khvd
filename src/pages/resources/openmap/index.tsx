
import './index.css';
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className="hdopm">
          <h2> <strong>Streetview.vn</strong> <br />
            - {t('Công Nghệ của Bản Đồ Openmap.vn')}</h2>
          <p>{t('Chúng tôi xây dựng bản đồ hình ảnh tới cấp độ đường phố dựa trên bản đồ mở của Openmap.vn')}</p>
          <img src="/assets/Imageframe.png" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="bgropm">
          <div className="contentopm">
            <div className="image-sectionopm">
              <img
                src="/assets/imageopm.png"
                alt="Streetview & Openmap"
                className="phones-imageopm"
              />
            </div>
            <div className="text-sectionopm">
              <h2 className="titleopm"><center>{t('Sự kết nối giữa')} <br />Streetview.vn {t('và')} Openmap.vn</center></h2>
              <p>
              {t('Streetview.vn và Openmap.vn là 2 dịch vụ bản đồ số thuộc Công ty TNHH Công Nghệ 44+.')}</p>
              <ul className="descriptionopm">


                <li>
                {t('Streetview.vn cung cấp hình ảnh toàn cảnh 360 độ cho các địa điểm của Openmap.vn. Bên cạnh đó Streetview.vn sử dụng dữ liệu bản đồ dựa trên nguồn dữ liệu của Openmap.vn.')} 
                </li>
                <li>
                {t('Openmap.vn có thể xác minh dữ liệu và cập nhật bản đồ, tạo ra các trải nghiệm thực tế với các địa điểm thông qua hình ảnh thực tế của Streetview.vn')}
                  
                </li>
              </ul>
            </div>
          </div></div>
      </div>
    </>
  );
}

export default App;
