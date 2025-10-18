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
      question: t("Tôi có thể đăng ký học thử Vovinam như thế nào?"),
      answer: t(
        "Bạn chỉ cần điền thông tin tại trang Liên hệ hoặc gọi trực tiếp đến trung tâm để được hướng dẫn. Chúng tôi luôn có các lớp học thử miễn phí để bạn trải nghiệm thực tế."
      ),
    },
    {
      question: t("Trẻ em mấy tuổi có thể bắt đầu học Vovinam?"),
      answer: t(
        "Trẻ từ 5 tuổi trở lên đã có thể bắt đầu học Vovinam. Giáo trình được thiết kế riêng phù hợp với độ tuổi, giúp trẻ phát triển thể chất, tính kỷ luật và sự tự tin."
      ),
    },
    {
      question: t("Tôi cần chuẩn bị gì trước khi tham gia buổi học đầu tiên?"),
      answer: t(
        "Bạn chỉ cần mặc trang phục thoải mái để vận động. Nếu chưa có võ phục, trung tâm sẽ hỗ trợ mượn trong buổi đầu. Đừng quên mang theo nước uống và tinh thần hào hứng!"
      ),
    },
    {
      question: t("Trung tâm có tổ chức thi lên đai không?"),
      answer: t(
        "Có. Chúng tôi tổ chức kỳ thi lên đai định kỳ 6 tháng/lần, có chứng nhận của Liên đoàn Vovinam Việt Nam. Học viên được hướng dẫn kỹ lưỡng để chuẩn bị tốt nhất cho kỳ thi."
      ),
    },
    {
      question: t("Tôi có thể tạm dừng buổi học nếu bận không?"),
      answer: t(
        "Bạn hoàn toàn có thể tạm hoãn lịch tập và sắp xếp bù sau. Hãy thông báo trước với huấn luyện viên để được hỗ trợ điều chỉnh lịch học phù hợp."
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
          <h1 className="faq-title">{t("Câu hỏi thường gặp về Vovinam")}</h1>
          <p className="faq-description">
            {t(
              "Tìm hiểu thêm về chương trình học, lịch tập, thi đai và chính sách của trung tâm Vovinam thông qua các câu hỏi được nhiều học viên quan tâm nhất."
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
