import "./footer.css";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isActiveLink = (path: string) => location.pathname === path;
  return (
    <footer style={{ backgroundColor: '#F5F6F7', padding: '40px', color: '#333',maxWidth:'1920px', margin:'0 auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' , }}>
 

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', marginTop: '20px' }}>

     
             <Link
              to="/"
              className={isActiveLink("/") ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
            >   <img src="/assets/Logostreetview.png" alt="Streetview.vn" style={{ width: '150px', marginRight: '10px'}} /></Link>





          <div style={{ borderTop: '1px solid #ddd', flex: '1', marginLeft: '10px' }}></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>

          <div className="colorpft" style={{ flex: '1', minWidth: '300px', marginBottom: '20px' }}>
            <h5> {t('Công ty TNHH Công Nghệ 44+')}</h5>
          <a href="https://www.streetview.vn/?lat=21.032796623&lng=105.788024983&picId=e213daed-3ae2-4259-940b-444a4056c101&yaw=279&pitch=30" target="_blank"> <p><img src="/assets/location.png" alt="" /> {t('Toà nhà 44+, 12/1 Dịch Vọng Hậu, Cầu Giấy, Hà Nội')}</p></a> 
           <a href="/contact"><p> <img src="/assets/Vector1.png" alt="" />  support@44plus.vn</p></a> 
           <a href="tel:+84838777777"><p> <img src="/assets/call.png" alt="" /> +84-838-777-777</p></a> 
            <p>{t('Giấy phép Cung cấp dịch vụ Viễn thông số: 47/GP-CVT')}</p>
            <p>{t('MST')}: 0109884702</p>
          </div>


          <div className="colorpft clftmg" style={{ flex: '1', minWidth: '300px', marginBottom: '20px' }}>
            <h4>{t('Thông tin cần biết')}</h4>
            <a
              href="https://www.streetview.vn/"
              className={isActiveLink("/map") ? "active" : ""}
              
              target="_blank"
            >
              <p>{t("Bản đồ")}</p>
            </a>
            <Link
              to="/pricing"
              className={isActiveLink("/pricing") ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
            >
              <p>{t("Bảng giá")}</p>
            </Link>
            <Link
              to="/contact"
              className={isActiveLink("/contact") ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
            >
              <p>{t("Liên hệ")}</p>
            </Link>

          </div>


          <div className="colorpft" style={{ flex: '1', minWidth: '270px', marginBottom: '20px' }}>
            <h4>{t('Thông tin khác')}</h4>
            {/* <p> <Link
              to="/Documents"
              className={isActiveLink("/Documents") ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
            >
              <p>{t("Tài liệu")}</p>
            </Link></p> */}

            <p>   <Link
              to="/privacy-policy"
              className={isActiveLink("/privacy-policy") ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
            >
              <p>{t("Chính sách bảo mật")}</p>
            </Link>
            
            </p>


 <p> <Link
              to="/terms-of-use"
              className={isActiveLink("/terms-of-use") ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
            >
               <p>{t('Điều khoản và điều kiện')}</p>
            </Link></p> 


            <p> <Link
              to="/Disclaimer"
              className={isActiveLink("/Disclaimer") ? "active" : ""}
              onClick={() => window.scrollTo(0, 0)}
            >
             <p>{t('Miễn trừ trách nhiệm')}</p>
            </Link></p> 



           
          </div>


          <div className="colorpft" style={{
            flex: '1', minWidth: '250px', marginBottom: '20px', color: 'var(--Sys-On-surface-on-surface-variant-high, rgba(76, 81, 90, 1))'
          }}>
            <h4>{t('Kết nối')}</h4>
            {/* <p ><img src="/assets/logo-dmca1.png" alt="" /> DMCA</p> */}
           <a href="https://www.facebook.com/44plusvn" target="_blank"><p><img src="/assets/leading.png" alt="" /> Facebook</p></a> 
            <p><img src="/assets/leading1.png" alt="" /> Twitter</p>
          <a href="https://www.linkedin.com/company/44-plus/about/" target="_blank"><p><img src="/assets/LinkedIn1.png" alt="" /> LinkedIn</p></a>  
          </div>
        </div>

        <div style={{ borderTop: '1px solid #ddd', marginTop: '20px', marginBottom: '20px' }}></div>


        <p style={{
          textAlign: 'center', fontSize: '14px', color: 'var(--Sys-On-surface-on-surface-variant-high, rgba(76, 81, 90, 1))'
        }}>
          {t('© 2024 Streetview.vn Bản quyền được bảo hộ')}
         
        </p>
      </div>
    </footer>
  );
}

export default Footer;
