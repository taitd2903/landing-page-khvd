import "./banner.css";
import { useTranslation } from "react-i18next";
import Viewerpro from "./video/video";
const Banner = () => {
    const { t } = useTranslation();
    const isActiveLink = (path: string) => {
        return path === location.pathname;
      };
    return (
        <>
            <div className="container">
              
                    <div className="center">
                        <h1 className="mgtsvt">{t('TRẢI NGHIỆM SỐNG ĐỘNG BẰNG')} <br /><span style={{color: 'var(--SYS-Primary-primary, rgba(20, 184, 166, 1))'
}}>{t('CHẾ ĐỘ XEM PHỐ ĐỘNG')}</span></h1>
                       <center>  <p className="pcenter">{t('Giúp người dùng khám phá các địa điểm ở góc nhìn chân thực và thực tế giống như đang đi bộ trên đường phố.')}</p></center> 
                     
                        <button className="btnstv">
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
                  
               
            </div>
            <div className="video" style={{ textAlign:'center'}}>
                {/* <img src="/assets/Video.png" alt="" /> */}
<Viewerpro/>
            </div>
      

      
        </>
    );
};

export default Banner;
