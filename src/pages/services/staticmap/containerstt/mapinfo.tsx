import "./mapinfo.css";
import { useTranslation } from "react-i18next";
const MapInfo = () => {const { t } = useTranslation();

  return (<>
 
    <div className="map-info-container">
      <div className="map-section">
        <div className="map-text sttmmtx">
          <h2>{t('Độ Chính Xác Của Bản Đồ')}  {t('Là Yếu Tố Hàng Đầu')}</h2>
          <p>
          {t('Độ chính xác của bản đồ là yếu tố hàng đầu quyết định hiệu quả và độ tin cậy của mọi ứng dụng dùng bản đồ, từ việc định vị cá nhân đến công tác quản lý và quy hoạch. Một bản đồ chính xác giúp người dùng xác định vị trí, tính đường và lên kế hoạch nhanh một cách an toàn và nhanh chóng. Đối với các ngành như logistics, bất động sản, và chuỗi cung cấp, độ chính xác này còn trở nên quan trọng vì nó ảnh hưởng trực tiếp đến quyết định và hiệu suất công việc. Vì vậy, việc cập nhật và duy trì độ chính xác của bản đồ là ưu tiên hàng đầu để mang đến trải nghiệm tốt nhất và an toàn nhất cho người dùng.')}
          </p>
        </div>

   
        <div className="map-images">
       
          {/* <div className="image-wrapper">
            <img
              src="/assets/staticmapview.png"
              alt="Yoona Location"
              className="map-image"
            />
            <p className="image-caption"> <strong>Yoona Cơ sở 2: </strong> 286 đường Cầu Giấy, Cầu Giấy, Hà Nội</p>
          </div>
          <div className="image-overlay">
            <img
              src="/assets/staticmap.png"
              alt="Cultural Center"
              className="map-image-overlay"
            />
            <p className="image-caption-overlay">
            <strong> Cung Văn Hóa Thanh Niên:</strong> <br />45 Lạch Tray, Ngô Quyền, Hải Phòng, Việt Nam
            </p>
          </div> */}
  <img className="prostaticimg" src="/assets/Frame 1234568826.svg" alt="" />



        </div>
      </div>
    </div> 
  

    <div className="container ">
    <div className="content-wrapperstt" >
    <img className="wrappersttimng" src="/assets/map360stv.png" alt="360 View" />


     <div className="stvimgctstt">
    

       <div className="text-contentstt magin0pro">
       <h1>{t('Bản Đồ Được Cập Nhật')} <br />{t('Thường Xuyên')}</h1>
       <p>
       {t('Thế giới luôn thay đổi, với các công trình mới, hệ thống giao thông được cải thiện, và các khu vực địa lý có thể bị ảnh hưởng bởi thiên tai. Bằng cách cập nhật thường xuyên, bản đồ phản ánh đúng tình hình thực tế, giúp người dùng tìm đường, định vị, và khám phá những địa điểm mới một cách hiệu quả và an toàn. Đối với các ngành như du lịch, giao thông và quản lý đô thị, bản đồ cập nhật liên tục còn hỗ trợ công tác lập kế hoạch và ra quyết định một cách tối ưu.')}
       </p>
     </div>
     </div>
     </div>
   </div>

    </>
  );
};

export default MapInfo;
