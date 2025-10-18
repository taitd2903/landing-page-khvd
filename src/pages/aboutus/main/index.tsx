// @ts-nocheck
import "./index.css";
import { useEffect } from "react";

const Mainabouts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className="about-wrapper">
      {/* === PHẦN TIÊU ĐỀ === */}
      <section className="about-header">
        <h1>
          Nó rất thú vị, vì vậy nếu <br />
          bạn đam mê, bạn sẽ tự mình phát triển.
        </h1>
        <p>
          Nếu bạn không thể làm điều gì đó, điều đó có nghĩa là bạn không có đủ trải nghiệm vui
          chơi nhập vai dẫn đến điều đó.
        </p>
        <p>
          Tại Viện nghiên cứu giáo dục thể chất và vui chơi Yasuda, chúng tôi đã hệ thống hóa và
          đang tiến hành nghiên cứu thực tế về{" "}
          <b>“Phương pháp giáo dục Yasuda”</b>, một phương pháp giáo dục mở rộng khả năng của cuộc
          sống.
        </p>
        <p className="blue-text">
          Chúng tôi đào tạo những huấn luyện viên thực hành về “trò chơi nhiệt tình, vui nhộn, giúp
          tinh thần thoải mái và cho phép bạn tự do kiểm soát cơ thể”.
        </p>
      </section>

      {/* === PHƯƠNG PHÁP GIÁO DỤC === */}
      <section className="yasuda-method">
        <h2>Phương pháp giáo dục Yasuda</h2>
        <p>
          Nhà giáo dục Yuji Yasuda đã sáng tạo ra phương pháp này dựa trên nhiều năm kinh nghiệm
          trong lĩnh vực chăm sóc và giáo dục trẻ em, với mục tiêu chính là thúc đẩy sự phát triển
          thần kinh và nhân cách. Đây là một phương pháp giáo dục kết hợp các hoạt động vui chơi,
          thiết bị vui chơi giáo dục và phương pháp giảng dạy phù hợp với những phát hiện mới nhất
          trong tâm lý học, vận động học và khoa học thần kinh, tạo ra hiệu ứng cộng hưởng.
        </p>
        <button className="btn-more">THÊM &gt;&gt;</button>
      </section>

      {/* === HỒ SƠ GIÁM ĐỐC === */}
<section className="director-section">
  <div className="director-title">
    <h2>H ồ  s ơ   G i á m   đ ố c</h2>
  </div>

  <div className="director-card">
    <div className="director-image">
      <img
        src="https://yasuda-method.com/wp/wp-content/themes/yasuda/images/page/yasudashiki01.png"
        alt="Tatsuhiko Iseki"
      />
      <p className="director-name">Tatsuhiko Iseki</p>
    </div>

    <div className="director-info">
      <p>
        Ông đã học với Yasuda Yuji, người sáng lập Phương pháp Yasuda, từ năm
        1998. Năm 2017, ông tiếp quản công việc nghiên cứu và trở thành giám
        đốc Viện Nghiên cứu Giáo dục Thể chất và Vui chơi theo Phương pháp
        Yasuda. Nhận thấy tình trạng suy giảm thể lực và khả năng an toàn về thể
        chất và tinh thần của trẻ em hiện nay, ông đã hệ thống hóa "Phương pháp
        Giáo dục Yasuda" như một giải pháp.
      </p>
      <p>
        Ông tiếp tục nghiên cứu thực tiễn với phương châm "Vui hơn và hiệu quả
        hơn". Ông tổ chức các buổi đào tạo thực hành tại các cơ sở chăm sóc trẻ
        em, cơ sở giáo dục và đội thể thao ở cả Nhật Bản và nước ngoài, đồng thời
        huấn luyện và giảng dạy hơn 200 buổi mỗi năm, tổng cộng hơn 6.000 buổi.
        Các buổi đào tạo và bài giảng của ông, tràn đầy nhiệt huyết và hài hước,
        đã thu hút nhiều người tham dự thường xuyên.
      </p>
      <p>
        Năm 2017, ông ra mắt trang web video về Phương pháp Yasuda “ganbarimame.com”,
        hiện có hơn 500 khóa học và tích cực quảng bá Phương pháp Yasuda thực hành
        cả trực tiếp và trực tuyến.
      </p>
    </div>
  </div>
</section>


      {/* === PHẦN THÔNG ĐIỆP === */}
      <section className="message-section">
       <div className="message-left">
  <div className="message-label">Message</div>
  <h2>
    Bởi nếu bạn đam mê
    <br />
    vì nó, bạn sẽ phát triển
    <br />
    một cách tự vui, nhiên.
  </h2>

  <p>
    Xin chào. Tôi là Iseki, giám đốc Viện Nghiên cứu Trò chơi Giáo dục Thể chất Yasuda.
    Nhờ hơn 85 năm nghiên cứu thực tiễn, từ thời còn là vận động viên thể dục dụng cụ đến
    khi trở thành giáo viên tiểu học, Giáo sư Yasuda đã có thể hệ thống hóa một cách khoa học
    trò chơi và giáo dục thể chất thành Phương pháp Giáo dục Yasuda.
  </p>

  <p>
    Phạm vi thực hành của nó tiếp tục được mở rộng như một phương pháp giáo dục đánh thức
    những bản năng thực sự cần thiết trong thời hiện đại. Nó cho phép trẻ em trải nghiệm
    những trò chơi đầy đam mê ngay từ nhỏ, và thậm chí đã được đưa vào giáo dục ở trường học
    và hướng dẫn thể thao.
  </p>

  <p>
    Hoạt động của ông Yuji Yasuda, người đã chủ trương và triển khai sự hợp tác giữa các
    trường mẫu giáo, nhà trẻ và tiểu học, vẫn tiếp tục cho đến ngày nay. Hiện nay, học sinh
    trung học cơ sở cũng tham gia vào sự hợp tác này, và các lớp học thể dục chung cho hơn
    300 người, từ trẻ sơ sinh đến 14 tuổi, được tổ chức tại nhiều địa điểm khác nhau.
  </p>

  <p>
    Chương trình này dành cho tất cả những người làm công tác chăm sóc trẻ em, giáo dục và
    hướng dẫn thể thao, mang đến cho bạn cơ hội trải nghiệm niềm vui giảng dạy, cách khơi
    gợi sự nhiệt huyết ở trẻ, cách nâng cao kỹ năng đồng cảm và an toàn, cùng các phương
    pháp giảng dạy thực tế.
  </p>

  <p>
    Chúng tôi sẽ tiếp tục nghiên cứu thực tiễn để việc giảng dạy trở nên thú vị và hiệu quả
    hơn. Chúng tôi hy vọng bạn sẽ cùng chúng tôi phấn đấu trở thành một giáo viên có thể giúp
    trẻ em mở rộng khả năng trong cuộc sống.
  </p>
</div>

        <div className="message-right">
          <img
            src="https://yasuda-method.com/wp/wp-content/themes/yasuda/images/page/yasudashiki04.jpg"
            alt="Yasuda teaching"
          />
          <p className="caption">
            Ông Yasuda và Giám đốc Iseki đang thảo luận cùng trẻ em. <br />
            (Ảnh chụp khoảng năm 2015)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mainabouts;
