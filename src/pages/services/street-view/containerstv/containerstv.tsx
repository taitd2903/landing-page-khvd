import "./containerstv.css";

import { useTranslation } from "react-i18next";
const Containerstv = () => {
  const { t } = useTranslation();

  const isActiveLink = (path: string) => {
    return path === location.pathname;
  };
  return (
    <>
      <div className="container">
        <div className="content-wrapper">

          <div className="text-content">
            <h1>{t('Du Lịch Và Trải Nghiệm Thực Tế Ngay Tại Nhà')}</h1>
            <p> {t('Với hình ảnh 360 độ của các địa điểm nổi tiếng, thắng cảnh thiên nhiên, và công trình kiến trúc trên toàn cầu, người xem có thể dễ dàng “dạo bước” trên những con phố nổi tiếng Hà Nội, chiêm ngưỡng vẻ đẹp của các danh lam thắng cảnh, hay khám phá các kỳ quan thiên nhiên nổi tiếng.  Đây là công cụ hứa hẹn giúp mọi người thỏa mãn đam mê du lịch và mở rộng tầm mắt, mang lại  trải nghiệm sống động và phong phú chỉ với một cú nhấp chuột.')}

            </p>
            <button >
              <a style={{ color: "white", textDecoration: "none" }}
                href="https://www.streetview.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className={isActiveLink('/map') ? 'active' : ''}
              >
                {t('Khám Phá Bản Đồ')}
              </a>

            </button>
          </div>


          <div className="stvimgct">
            <img src="/assets/map360stv.png" alt="360 View" />
          </div>

        </div>



        <section className="guide-section">
          <h2>{t('Cách Sử Dụng Chế Độ Xem Phố Động')}</h2>
          <div className="guide-content">

            <div className="guide-item">
              <img src="/assets/domain1.png" alt="" />

              <h3><br />1) {t('Di Chuyển')}</h3>
              <p>
                {t('Nhấn vào các nút mũi tên điều hướng hiển thị trên màn hình để di chuyển lên, xuống và xung quanh trái phải.')}
              </p>
            </div>
            <div className="guide-item">
              <img src="/assets/iphone1.png" alt="" />
              <h3><br />2) {t('Chế Độ Tự Hành')} </h3>
              <p>
                {t('Chọn biểu tượng Play để bật chế độ tự hành, màn hình sẽ tự động di chuyển đến vị trí và thay đổi tốc độ chạy.')}
              </p>
            </div>
            <div className="guide-item">
              <img src="/assets/laptop1.png" alt="" />
              <h3><br />3) {t('Tăng Trải Nghiệm')}</h3>
              <p>
                {t('Chọn nút hỗ trợ ảnh sáng để ra hình ảnh 360 độ chất lượng, hoặc chọn nút zoom in/zoom out để phóng to thu nhỏ bản đồ.')}
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="imgstvft"><center><img className="imgstvftimg" src="/assets/map3602.png" alt="" /></center></div>

    </>
  );
};

export default Containerstv;
