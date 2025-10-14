import "./banner.css";
import { useTranslation } from "react-i18next";
const Banner = () => {
    const { t } = useTranslation();
    const isActiveLink = (path: string) => {
        return path === location.pathname;
      };
    return (
        <>
            <div className="clbgr">
                <div className="wrapper">
                    <div className="textbannerleft">
                        <h1>{t('BỘ DỮ LIỆU BẢN ĐỒ')} <br />
                        {t('ĐA DẠNG - CHÍNH XÁC')} </h1>
                        <p>{t('Cung cấp thông tin địa lý phong phú và đảm bảo độ chính xác cao, hỗ trợ nhiều ứng dụng từ quy hoạch đô thị đến dịch vụ định vị.')}</p>
                        <button className="clbgr-buttonproimg3d">
                            
                        <a style={{color:"white", textDecoration:"none"}}
              href="https://www.streetview.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className={isActiveLink('/map') ? 'active' : ''}
            >
            {t('Khám Phá Bản Đồ')} 
            </a> </button>
                    </div>
                    <div className="imgbannerright">
                        <img src="/assets/mapdatasetbanner.png" alt="Streetview Illustration" className="mapdataa-imagepro" />
                        <img src="/assets/Polygon 2.png" alt="" className="img3d-image-bgr" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
