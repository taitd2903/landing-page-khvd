import "./banner.css";
import { useTranslation } from "react-i18next";
const Banner = () => {
    const { t } = useTranslation();
    const isActiveLink = (path: string) => {
        return path === location.pathname;
      };
    return (
        <>
        <div className="bgrsttm">

            <div className="container">
              
                    <div className="center">
                        <h1 className="mgtsvt">{t('TÌM KIẾM ĐỊA CHỈ ĐỘ CHÍNH XÁC CAO')} {t('BẰNG')} <span style={{ display:"block",color: 'var(--SYS-Primary-primary, rgba(20, 184, 166, 1))'
}}>{t('BẢN ĐỒ TĨNH')}</span></h1>
                       <center>  <p className="pcenter">{t('Công nghệ cập nhật thường xuyên dữ liệu chi tiết. Công cụ đáng tin cậy cho nhiều ứng dụng yêu cầu độ chính xác về địa lý.')} </p></center> 
                     
                        <button className="btnstv">
                        <a style={{color:"white", textDecoration:"none"}}
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
            <div  style={{ textAlign:'center'}}>
                <img className="staticmapimgbn" src="/assets/macmap.png" alt="" />
            </div>
            
            
            
            </div>
        </>
    );
};

export default Banner;
