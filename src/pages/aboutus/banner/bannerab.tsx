import './bannerab.css';
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="container bgrabua">
      <div className="containerbnr"></div>
      <div className="containerimgab">
        <img src="assets/bgrbannerus.png" alt="" className="bannerxanh" />
        <img src="assets/bannerus.png" alt="" className="streetview" />
        <div className="textbgrab">
          <p>
          {t('CÙNG')} <span>{t('STREETVIEW.VN')}</span>
            <br />
             {t('KHÁM PHÁ ĐƯỜNG PHỐ')}  
          </p>
          <h2>{t('VIỆT NAM')}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
