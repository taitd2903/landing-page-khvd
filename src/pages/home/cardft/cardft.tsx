import "./cardft.css";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="pricing-container">
      <h1>{t("Chọn gói học Vovinam phù hợp với bạn")}</h1>
      <p className="subtitle">
        {t(
          "Vovinam – Việt Võ Đạo không chỉ rèn luyện thể chất mà còn giúp phát triển ý chí, đạo đức và tinh thần kỷ luật. Hãy chọn gói học phù hợp với mục tiêu và thời gian của bạn."
        )}
      </p>

      <div className="pricing-cards">
        {/* GÓI 1 */}
        <div className="cardft">
          <h2>{t("Gói Thử")}</h2>
          <p className="price">{t("Miễn phí")}</p>
          <p className="requests">
            <span className="xanh">2</span> {t("buổi học thử / tuần")}
          </p>
          <p className="description">
            {t(
              "Khám phá thế giới Vovinam qua những buổi học thử miễn phí. Học viên sẽ được làm quen với các động tác cơ bản, cách khởi động đúng chuẩn, kỹ thuật té ngã an toàn và triết lý võ đạo Việt."
            )}
          </p>
          <button className="explore-button">
            <a href="/contact">{t("Đăng ký ngay")}</a>
          </button>

          <p className="section-title">{t("Bao gồm")}</p>
          <ul className="features">
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Hướng dẫn nhập môn Vovinam")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Mượn dụng cụ tập miễn phí")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Trải nghiệm môi trường tập luyện năng động")}
            </li>
            <li className="lammo">
              <img src="/assets/clear-circle.png" alt="" className="clearcl" />{" "}
              {t("Không bao gồm thi kiểm tra hoặc chứng nhận")}
            </li>
          </ul>

          <p className="section-title">{t("Phù hợp cho")}</p>
          <ul className="features">
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Người mới làm quen với võ thuật")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Phụ huynh muốn cho con trải nghiệm an toàn")}
            </li>
          </ul>
        </div>

        {/* GÓI 2 */}
        <div className="cardft">
          <h2>{t("Gói Cơ Bản")}</h2>
          <p className="price">800.000₫ / {t("tháng")}</p>
          <p className="requests">
            <span className="xanh">3</span> {t("buổi / tuần")}
          </p>
          <p className="description">
            {t(
              "Phát triển sức khỏe, thể lực và tinh thần kỷ luật qua chương trình luyện tập đều đặn. Học viên được hướng dẫn từ kỹ thuật tấn công, phòng thủ đến thi lên đai xanh và tham gia các hoạt động câu lạc bộ."
            )}
          </p>
          <button className="explore-button">
            <a href="/contact">{t("Đăng ký ngay")}</a>
          </button>

          <p className="section-title">{t("Bao gồm")}</p>
          <ul className="features">
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Học kỹ thuật cơ bản & trung cấp")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Lớp tối đa 15 học viên / 1 HLV")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Tham gia kỳ thi lên đai cấp CLB")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Chứng nhận hoàn thành cấp độ")}
            </li>
            <li className="lammo">
              <img src="/assets/clear-circle.png" alt="" className="clearcl" />{" "}
              {t("Không có huấn luyện viên riêng")}
            </li>
          </ul>

          <p className="section-title">{t("Phù hợp cho")}</p>
          <ul className="features">
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t(
                "Thanh thiếu niên, người mới học muốn rèn luyện sức khỏe"
              )}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Người làm việc văn phòng muốn giảm stress")}
            </li>
          </ul>
        </div>

        {/* GÓI 3 */}
        <div className="cardft">
          <h2>{t("Gói Chuyên Nghiệp")}</h2>
          <p className="price">{t("Liên hệ để báo giá")}</p>
          <p className="requests">
            <span className="xanh">{t("Không giới hạn")}</span>{" "}
            {t("buổi / tháng")}
          </p>
          <p className="description">
            {t(
              "Dành cho học viên mong muốn tập luyện chuyên sâu, nâng cao thể lực, phản xạ và chuẩn bị cho thi đấu chuyên nghiệp. Được huấn luyện trực tiếp bởi võ sư giàu kinh nghiệm và cá nhân hóa giáo trình theo thể trạng từng người."
            )}
          </p>
          <button className="explore-button">
            <a href="/contact">{t("Liên hệ ngay")}</a>
          </button>

          <p className="section-title">{t("Bao gồm")}</p>
          <ul className="features">
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Huấn luyện viên riêng (1:1)")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Lịch tập linh hoạt & giáo trình cá nhân hóa")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Kỹ thuật nâng cao, đối kháng và thi đấu")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Hỗ trợ chế độ dinh dưỡng & phục hồi thể lực")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Tham gia giải đấu và cấp huy chương CLB")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Tư vấn thi Huyền đai và thi đấu cấp quốc gia")}
            </li>
          </ul>

          <p className="section-title">{t("Phù hợp cho")}</p>
          <ul className="features">
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Học viên định hướng thi đấu, lên đai")}
            </li>
            <li>
              <img src="/assets/check.png" alt="" className="checkcl" />{" "}
              {t("Huấn luyện viên muốn nâng cao kỹ năng sư phạm võ thuật")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
