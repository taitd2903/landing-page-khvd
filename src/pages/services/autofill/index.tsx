import './index.css'
import Bannerft from "../image3d/bannerft/bannerft";
import FAQ from  './question/card'
import { useTranslation } from "react-i18next";
const isActiveLink = (path: string) => {
  return path === location.pathname;
};
const Index = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="bgrctn">
<div className="container">

  <div className="containertopatf">
  <h2>{t('DỄ DÀNG')} <span className='proatfsd'> {t('TÌM KIẾM ĐỊA CHỈ')}</span> <br />
  {t('NHỜ TÍNH NĂNG')}  <span className='proatfsd'>{t('TỰ ĐỘNG ĐIỀN')}</span> </h2>
  
  <p>{t('Với tính năng tự động điền địa chỉ, việc tìm kiếm và nhập thông tin trở nên nhanh chóng và tiện lợi hơn bao giờ hết.')}</p>
<button>
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
<div className="imgautofill">
<img src="/assets/search 1.webp" alt="" className='atfimg' />
</div>
</div>
</div>
    <FAQ/>
    <Bannerft/>
    </>
  );
};

export default Index;
