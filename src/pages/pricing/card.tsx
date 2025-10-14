import { useState } from "react";
import "./card.css";
import Cardft from "../home/cardft/cardft";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const faqData = [
    {
      question: t("Tôi được sử dụng gói Free trong bao lâu?"),
      answer: t(
        "Với mong muốn được đóng góp cho sự phát triển của các kỹ năng tương lai tại Việt Nam cũng như sự phát triển của các công nghệ thân thiện môi trường, chúng tôi cung cấp gói Free vô thời hạn."
      ),
    },
    {
      question: t("Làm thế nào để nâng cấp gói ?"),
      answer: t(
        "Bạn có thể nâng cấp từ gói Free lên gói Business và Pro+ hãy liên hệ với chúng tôi thông qua trang liên hệ."
      ),
    },
    {
      question: t("Với các gói tính phí tôi có thể thanh toán qua các hình thức nào?"),
      answer: t(
        "Với gói Business và Pro bạn có thể chuyển khoản hoặc thanh toán tiền mặt."
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Cardft />
      <div className="faq-container">
        <div className="faq-left-column">
          <span className="faq-badge">
            <img
              style={{ marginRight: "5px" }}
              src="/assets/LeadingIcon.png"
              alt="icon"
            />
            FAQ
          </span>
          <h1 className="faq-title">{t("Các câu hỏi thường gặp")}</h1>
          <p className="faq-description">
            {t(
              "Khám phá các câu hỏi thường gặp của chúng tôi để tìm hiểu thêm về các tính năng, bảo mật, khả năng tích hợp của Streetview và nhiều hơn nữa"
            )}
          </p>
        </div>
        <div className="faq-right-column">
          <div className="faq-items">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <span className="faq-icon">
                    <IoIosArrowDown />
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
