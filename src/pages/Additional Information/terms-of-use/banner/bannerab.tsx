import './bannerab.css';
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="container proctnflb">
      <div className="containerimgdocument">
        {/* Thay đổi ảnh khi màn hình nhỏ hơn 1440px */}
        <picture>
          <source srcSet="assets/bgrbannerus.png" media="(max-width: 769px)" />
          <img src="assets/Hero Background.png" alt="" className="bannerxanhdocument" />
        </picture>

        <picture>
          <source srcSet="assets/bannerus1.png" media="(max-width: 769px)" />
          <img src="assets/Hero Image.png" alt="" className="streetviewdocument" />
        </picture>

        {/* Nội dung văn bản */}
        <div className="textbgrdocument">
          <img src="/assets/policy.svg" alt="" />
          <h2>{t('Thông báo pháp lý')}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
