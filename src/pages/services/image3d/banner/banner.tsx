import "./banner.css";
import { useTranslation } from "react-i18next";
const Banner = () => {
    const isActiveLink = (path: string) => {
        return path === location.pathname;
      };
    const { t } = useTranslation();
    return (
        <>
            <div className="clbgr">
                <div className="wrapper">
                    <div className="textbannerleft">
                        <h1>{t('KHÁM PHÁ BẢN ĐỒ QUA')} <span>{t('HÌNH ẢNH 3D')}</span></h1>
                        <p>{t('Xu hướng công nghệ tiên tiến mang đến cho người dùng trải nghiệm tương tác mới mẻ và sống động')}</p>
                        <button className="clbgr-buttonproimg3d">
                            
                            <a
              href="https://www.streetview.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className={isActiveLink('/map') ? 'active' : ''}
            >
         {t('Khám Phá Bản Đồ')}
            </a>
                             </button>
                    </div>
                    <div className="imgbannerright">
                        <img src="/assets/mobile3dmap.png" alt="Streetview Illustration" className="img3d-imagepro" />
                        <img src="/assets/Polygon 2.png" alt="" className="img3d-image-bgr" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
