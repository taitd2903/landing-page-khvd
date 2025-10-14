import { useState } from "react";
import "./card.css";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: t("Gợi ý vị trí tốt nhất"),
      answer: t(
        "Tính năng tự động điền của Streetview.vn không chỉ đơn giản là hoàn thành các từ khóa bạn đang nhập, mà còn thông minh trong việc đưa ra những gợi ý phù hợp nhất với nhu cầu của bạn.\n\nChẳng hạn, nếu bạn đang tìm kiếm một địa điểm phổ biến như “Nhà thờ lớn,” trang sẽ nhanh chóng gợi ý các tùy chọn liên quan, như tên đầy đủ, các biến thể từ khóa liên quan, và những địa điểm xung quanh đó.\n\nĐiều này có nghĩa là bạn không cần phải nhớ chính xác tên địa điểm, hoặc lo ngại về cách viết của nó. Streetview.vn sẽ hiểu được ý định của bạn và đưa ra gợi ý dựa trên các tìm kiếm phổ biến, vị trí nổi bật, cũng như các địa điểm đang được quan tâm tại thời điểm hiện tại."
      ),
    },
    {
      question: t("Tìm kiếm nhanh chóng dễ dàng"),
      answer: t(
        "Công cụ tìm kiếm bản đồ của Streetview.vn cho phép bạn tra cứu địa điểm một cách nhanh chóng và dễ dàng, chỉ trong chưa đầy 1 giây. Với hệ thống gợi ý thông minh và khả năng phản hồi nhanh, bạn có thể tìm thấy vị trí mong muốn ngay lập tức, giúp tiết kiệm thời gian và nâng cao trải nghiệm tìm kiếm bản đồ."
      ),
    },
  ];


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


  return (
    <div className="container">
      <h1 className="titlecpro">{t('Công Cụ Tìm Kiếm Bản Đồ Tiện Lợi Nhất Việt Nam')}</h1>
      <div className="content">
        <div className="left">
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

 
        <div className="right">
          <img
            src="/assets/search.png"
            alt="Minh họa bản đồ"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
