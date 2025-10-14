
import './card.css';
import { useTranslation } from "react-i18next";
const TeamAndTestimonials = () => {

  const { t } = useTranslation();

  return (
    <div className="team-and-testimonials-container">

      <section className="team-section">
        <h2>{t('ĐỘI NGŨ SẢN XUẤT')}</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="/assets/banquanly.png" alt="Ban Quản Lý" />
            <div className="team-card-title">{t('Ban Quản Lý')}</div>
          </div>
          <div className="team-card">
            <img src="/assets/doisanpham.png" alt="Đội Sản Phẩm" />
            <div className="team-card-title">{t('Đội Sản Phẩm')}</div>
          </div>
          <div className="team-card">
            <img src="/assets/imgabup.png" alt="Đội Lái Xe" />
            <div className="team-card-title">{t('Đội Lái Xe')}</div>
          </div>
        </div>
      </section>


      <section className="testimonials-section">
        <h2>{t('KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI ?')}</h2>
        <div className="testimonials">


          <div className="testimonial-card cardspam cardspamleft ">
            <div className="testimonial-quote-icon">
              <img src="/assets/dauphay.png" alt="quote" className="quote-icon" />
            </div>
            <img src="/assets/ml.png" alt="Mai Linh" className="testimonial-logo" />
            <div className="testimonial-content">
              <p className="testimonial-text">
              {t('Dịch vụ của doanh nghiệp luôn vượt trội, mang lại giải pháp công nghệ tối ưu và hiệu quả cho chúng tôi. Đội ngũ tận tâm, chuyên nghiệp, luôn sẵn sàng hỗ trợ mọi lúc mọi nơi.')} </p>
              <div className="testimonial-rating">
                <span>★★★★★</span>
              </div>
              <div className="testimonial-name">_ Mai Linh Taxi Group</div>
            </div>
          </div>

          <div className="testimonial-card cardspam">
            <div className="testimonial-quote-icon">
              <img src="/assets/dauphay.png" alt="quote" className="quote-icon" />
            </div>
            <img src="/assets/g7.png" alt="xanh" className="testimonial-logo" />
            <div className="testimonial-content">
              <p className="testimonial-text">
              {t('Chúng tôi rất ấn tượng với sự đổi mới và chất lượng sản phẩm mà doanh nghiệp mang lại. Quá trình hợp tác diễn ra suôn sẻ nhờ vào sự chuyên nghiệp và tận tâm của đội ngũ. Nhờ đó, doanh nghiệp đã giúp chúng tôi nâng cao hiệu suất và đạt được những kết quả vượt mong đợi.')}   </p>
              <div className="testimonial-rating">
                <span>★★★★★</span>
              </div>
              <div className="testimonial-name">_ G7 Group</div>
            </div>
          </div>

  <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <img src="/assets/dauphay.png" alt="quote" className="quote-icon" />
            </div>
            <img src="/assets/Cozrum.png" alt="Cozrum" className="testimonial-logo" />
            <div className="testimonial-content">
              <p className="testimonial-text">
              {t('Chúng tôi đánh giá cao giá trị từ quá trình hợp tác. Giải pháp bản đồ hình ảnh giúp nâng cao trải nghiệm khách hàng và tối ưu vận hành. Đội ngũ kỹ thuật chuyên nghiệp, phản hồi nhanh và luôn sẵn sàng hỗ trợ là điểm khác biệt nổi bật.')}   </p>
              <div className="testimonial-rating">
                <span>★★★★★</span>
              </div>
              <div className="testimonial-name">_ Cozrum</div>
            </div>
          </div>



        </div>
      </section>
    </div>
  );
};

export default TeamAndTestimonials;
