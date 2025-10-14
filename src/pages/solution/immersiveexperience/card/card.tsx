import "./card.css";
import { useTranslation } from "react-i18next";
const Card = () => {
  const { t } = useTranslation();
  const isActiveLink = (path: string) => {
    return path === location.pathname;
  };
  return (
    <>
    <div className="cards-sectionslt">
      <div className="cards-containerslt">
        <div className="cardslt">
          <h3>{t('Khám Phá 360 Độ')}</h3>
          <p>
          {t('Người dùng có thể điều hướng qua các hình ảnh toàn cảnh, cho phép họ cảm nhận về môi trường xung quanh như thể họ đang đứng tại vị trí đó.')} 
          </p>
        </div>
        <div className="cardslt">
          <h3>{t('Cập Nhật Liên Tục')}</h3>
          <p>
          {t('Thường xuyên cập nhật hình ảnh để phản ánh những thay đổi trong môi trường thực tế, giúp người dùng có được thông tin chính xác nhất.')}
          </p>
        </div>
        <div className="cardslt">
          <h3>{t('Tương Tác Dễ Dàng')}</h3>
          <p>
          {t('Giao diện thân thiện với người dùng cho phép dễ dàng điều hướng qua các cảnh, ví dụ nhà hàng, phòng họp, nhà thờ và xung quanh.')}  
          </p>
        </div>
        <div className="cardslt">
          <h3>{t('Khả Năng Tiếp Cận Toàn Cầu')}</h3>
          <p>
          {t('Bao gồm hình ảnh từ khắp nơi trên thế giới, từ các khu đô thị đông đúc đến những vùng nông thôn hẻo lánh.')}  
          </p>
        </div>
        <div className="cardslt">
          <h3>{t('Hỗ Trợ Quy Hoạch và Du Lịch')}</h3>
          <p>
          {t('Tính năng này rất hữu ích cho việc lập kế hoạch du lịch, tìm đường, hoặc chỉ cần giản là khám phá các địa điểm mới trước khi thực sự đến nơi.')}  
          </p>
        </div>
        <div className="cardslt">
          <h3>{t('Công Nghệ Tiên Tiến')}</h3>
          <p>
          {t('Hình ảnh được thu thập bằng các phương tiện như ô tô Streetview, xe đạp và thậm chí cả tàu thủy để Trekker có thể tham gia, giúp chụp được cả những khu vực khó tiếp cận.')} 
          </p>
        </div>
      </div>
      <div className="explore-button-container">
        <button className="explore-button"><a style={{color:"white", textDecoration:"none"}}
              href="https://www.streetview.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className={isActiveLink('/map') ? 'active' : ''}
            >
            {t('Khám Phá Bản Đồ')} 
            </a></button>
      </div>
    </div>
    </>
    );
};

export default Card;
