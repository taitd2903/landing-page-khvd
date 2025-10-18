
import "./index.css";


const Mainhome = () => {
  return (
    <div className="mainhome-wrapper">
      {/* Hero */}
      <section className="mainhome-hero">
        <h1>If you are passionate, you will grow</h1>
        <p>
          We will teach you how to create “addictive games” that will awaken your child’s instincts.
        </p>
      </section>

      {/* Intro (What is the Yasuda...) */}
      <section className="mainhome-intro">
        <div className="mainhome-intro-inner">
          <h2>
            What is the Yasuda-style Physical Education and Play Research Institute?
          </h2>
          <p>
            We are systematizing and conducting practical research on the “Yasuda Method,”
            an educational method that broadens the possibilities of life. We train practical
            instructors of “enthusiastic play” that will make your mind happy and give you
            the ability to control your body freely.
          </p>
          <button>MORE &gt;&gt;</button>
        </div>
      </section>

      {/* Blog / Seminar / Topics */}
      <section className="mainhome-news">
        <div className="mainhome-news-item">
          <div className="mainhome-news-badge blog">Blog</div>
          <h3>Director's Blog</h3>
          <div className="mainhome-news-body">
              <img
              src="https://yasuda-method.com/wp/wp-content/uploads/2025/04/2025-04-07_新年度を迎えて-500x350.jpg"
              alt="Seminar"
            />
            <p className="jp">新年度を迎えて</p>
            <p className="date">April 7, 2025</p>
            <p>
              Happy New Year! In last year’s training survey, the most common question was,
              “How can we create a playful environment that enriches?”
            </p>
          </div>
        </div>

        <div className="mainhome-news-item">
          <div className="mainhome-news-badge seminar">Seminar</div>
          <h3>Training session information</h3>
          <div className="mainhome-news-body">
            <img
              src="https://yasuda-method.com/wp/wp-content/uploads/2025/04/研修会告知5-8月_研究所-500x350.jpg"
              alt="Seminar"
            />
              <p className="jp">新年度を迎えて</p>
            <p className="date">April 7, 2025</p>
            <p>
              This year’s hottest topic! Yasuda-style training seminar information [May–August].
            </p>
          </div>
        </div>

        <div className="mainhome-news-item">
          <div className="mainhome-news-badge topics">Topics</div>
          <h3>Topics</h3>
          <div className="mainhome-news-body">
            <img
              src="https://yasuda-method.com/wp/wp-content/uploads/2025/03/S__34643979-500x350.jpg"
              alt="Topics"
            />
              <p className="jp">新年度を迎えて</p>
            <p className="date">April 7, 2025</p>
            <p>
              Radio appearance 3/17 (Mon) 20:00 – FM Osaka... Director Yasuda will be a guest!
            </p>
          </div>
        </div>
      </section>

      {/* Information */}
 <section className="mainhome-info">
  <div className="mainhome-info-inner">
    <div className="mainhome-info-title">Thông tin</div>
    <div className="mainhome-info-list">
      <div className="mainhome-info-item">
        <div className="mainhome-info-date">
          Ngày <span>5</span> tháng <span>8</span> năm 2025
        </div>
        <div className="mainhome-info-text">
          Kính gửi Quý khách hàng, Cảm ơn Quý khách đã luôn ủng hộ. Chúng tôi sẽ đóng cửa trong thời gian tới do mùa hè...
        </div>
      </div>

      <div className="mainhome-info-item">
        <div className="mainhome-info-date">
          Ngày <span>23</span> tháng <span>4</span> năm 2025
        </div>
        <div className="mainhome-info-text">
          Kính gửi Quý khách hàng, Cảm ơn Quý khách đã luôn ủng hộ. Chúng tôi sẽ đóng cửa trong thời gian tới...
        </div>
      </div>

      <div className="mainhome-info-item">
        <div className="mainhome-info-date">
          Ngày <span>1</span> tháng <span>1</span> năm 2025
        </div>
        <div className="mainhome-info-text">
          Chúng tôi xin gửi lời chúc mừng năm mới tốt đẹp nhất. Cảm ơn sự ủng hộ của quý vị trong suốt năm qua. 
          Chúng tôi hy vọng các em nhỏ sẽ ngày càng khỏe mạnh hơn trong năm nay.
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Activity details */}
      <section className="mainhome-activity">
        <div className="mainhome-activity-overlay">
          <h3>Activity details</h3>
          <button>MORE &gt;&gt;</button>
        </div>
        <img
          src="https://yasuda-method.com/wp/wp-content/themes/yasuda/images/top/top02.jpg"
          alt="Activity"
        />
      </section>

      {/* Request + Schedule */}
      <section className="mainhome-links">
        <button className="blue">Click here to request a lecture</button>
        <button className="gray">Yasuda-style training session schedule is here</button>
      </section>

      {/* Book */}
      <section className="mainhome-book">
        <div className="mainhome-book-img">
      <img src="https://yasuda-method.com/wp/wp-content/themes/yasuda/images/common/bookBnr.png" alt="" />
        </div>
       
      </section>
    </div>
  );
};

export default Mainhome;
