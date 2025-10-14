import Banner from "./banner/banner";
import Card from "../immersiveexperience/card/card";
import './index.css'
import { useTranslation } from "react-i18next";
const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner />

      <div className="container">
      <div className="open-container">
    
      <div className="open-text-section">
        <h1>{t('Công cụ tải lên')}</h1>
        <p>
        {t('Cùng nhau đóng góp để tạo nên một mạng lưới dữ liệu bản đồ hoàn thiện nhất. Chia sẻ công khai hình ảnh hoặc video bằng công cụ tải lên của chúng tôi.')} 
        </p>
      </div>

 
      <div className="open-image-section">
        <img
          src="/assets/updateopdt.svg"
          alt="Hình ảnh tải lên"
          className="open-preview-image"
        />
      </div>
    </div>
      <div className="containeropdt">
        <div className="opdata">
          <h2>{t('Đóng Góp Hình Ảnh cho Streetview.vn')}</h2>
          <p>{t('Streetview.vn cho phép người dùng đóng góp hình ảnh của riêng mình vào Streetview.vn thông qua tính năng đóng góp hình ảnh. Đây là cách tuyệt vời để mở rộng khả năng phủ sóng của Streetview.vn, đặc biệt là ở những khu vực Streetview.vn chưa kịp chụp hoặc khó tiếp cận. Dưới đây là một số lợi ích và cách thức đóng góp')}:
      
          
          </p>
        </div>
      </div>
      </div>
      <Card />
    </>
  );
};

export default Index;
