//@ts-nocheck
import { useState } from 'react';
import './container3d.css';
import { useTranslation } from "react-i18next";
const App = ()=> {
  const [activeSection, setActiveSection] = useState('section1');
  const { t } = useTranslation();
  const toggleSection = (section) => {
    setActiveSection(section);
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const highlightStreetView = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => {
      const highlightedParagraph = paragraph.split("Streetview.vn").map((part, idx) =>
        idx !== 0 ? (
          <>
            <span className="highlighted">Streetview.vn</span>
            {part}
          </>
        ) : (
          part
        )
      );
      return <p key={index} className="faq-answer-paragraph">{highlightedParagraph}</p>;
    });
  };

  const faqData = [
    {
      question: t("Tăng khả năng trực quan"),
      answer: t(
        "Nhờ hình ảnh thực tế 360 độ, người dùng có thể thấy chi tiết đường phố, tòa nhà, và các cảnh quan xung quanh, tạo cảm giác như đang trực tiếp có mặt tại địa điểm đó. Điều này hỗ trợ đáng kể trong việc lập kế hoạch di chuyển, tìm đường hoặc khảo sát địa điểm từ xa.\n\n Với hình ảnh chân thực, Streetview.vn mang đến cái nhìn trực quan hơn bản đồ 2D thông thường, giúp người dùng dễ dàng hình dung môi trường và định hướng tốt hơn."
      ),
    },
    {
      question: t("Hỗ trợ quản lý cho các ban ngành"),
      answer: t(
        "Với khả năng cung cấp hình ảnh thực tế của các khu vực, Streetview.vn giúp các cơ quan dễ dàng khảo sát hiện trạng cơ sở hạ tầng, kiểm tra tình hình giao thông, cũng như quản lý tài sản công cộng mà không cần đến trực tiếp.\n\n Điều này không chỉ tiết kiệm thời gian và chi phí, mà còn tăng độ chính xác trong việc đưa ra các quyết định liên quan đến quy hoạch và phát triển. Streetview.vn mang đến cái nhìn toàn cảnh và chi tiết, hỗ trợ ban ngành nắm bắt tình hình nhanh chóng và hiệu quả."
      ),
    },
  ];




  return (<>

    <div className="container">
      <div className="app">
     
        <section className="section-3d">
          <h2>{t('Tác Dụng Của Hình Ảnh 3D')}</h2>
          <div className="content-3d">
            <div className="text-content">

            <div className="faq-items">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <span className="faq-icon">
              
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    {highlightStreetView(item.answer)}
                  </div>
                )}
              </div>
            ))}
          </div>

            </div>



            <div className="img31d">
              <img className='img3dpro' src="/assets/map360.png" alt="3D Street View" />
            </div>
          </div>
        </section>


        <section className="section-devices">
          <h2>{t('Trải Nghiệm Streetview.vn Trên Mọi Thiết Bị')}</h2>
          <div className="device-options">
            <div className="device-option">
              <img src="/assets/domain.png" alt="Website Icon" />
              <h3>{t('Streetview.vn Trên Website')}</h3>
              <p> {t('Bản đồ Street View hiện có thể truy cập trực tiếp trên website, giúp người dùng dễ dàng khám phá địa điểm và định vị chính xác ngay trên trình duyệt mà không cần cài đặt ứng dụng. Hiện có trên Chrome, Weoja và các trình duyệt khác.')} </p>
            </div>
            <div className="device-option">
              <img src="/assets/iphone.png" alt="Mobile Icon" />
              <h3>{t('Streetview.vn Cho Thiết Bị Di Động')}</h3>
              <p>{t('Dù bạn đang dùng điện thoại thông minh hay máy tính bảng, bản đồ Street View đều hoạt động mượt mà, giúp bạn khám phá địa điểm từ xa, dễ dàng khám phá đường phố mà không cần phải đến tận nơi.')}</p>
            </div>
            <div className="device-option magin0pro">
              <img src="/assets/laptop.png" alt="Desktop Icon" />
              <h3>{t('Streetview.vn Cho Máy Tính')}</h3>
              <p>{t('Sử dụng Street View trên máy tính mang đến trải nghiệm mượt mà, cho phép người dùng di chuyển, xoay nhìn toàn cảnh và khám phá chi tiết các khu vực mình quan tâm mà không cần phải đi thực tế.')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>

</>
  );
}

export default App;
