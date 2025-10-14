
import Banner from "./banner/banner";
import './index.css'
import Bannerft from "../image3d/bannerft/bannerft";
import { useTranslation } from "react-i18next";
const Staticmap = () => {
  const { t } = useTranslation();
  return (
    <>
   <Banner/>
   <div className="container">
<center><h2 className="datah2">{t('Hơn 60 Dữ Liệu Bản Đồ Được Tìm Thấy')}</h2></center>
<p className="datap">{t('Công nghệ phát hiện dữ liệu vật thể của')} <strong>Streetview.vn</strong>  {t('được phát triển dựa trên các thuật toán xử lý hình ảnh và trí tuệ nhân tạo tiên tiến. Bằng cách sử dụng hệ thống camera và cảm biến tiên tiến,')}<strong>Streetview.vn</strong> {t('thu thập một lượng lớn hình ảnh từ các tuyến đường, sau đó áp dụng các thuật toán học máy để phân tích và nhận diện các đối tượng trong môi trường xung quanh.')}
<br />
<br />
{t('Hệ thống này có khả năng nhận diện đa dạng các đối tượng như người đi bộ, biển báo giao thông, phương tiện như xe máy, ô tô, các khu vực có điểm mù, cũng như cây cối và các vật thể khác. Để thực hiện điều này, công nghệ nhận diện hình ảnh sẽ phân loại và xác định vị trí của từng loại đối tượng, giúp tối ưu hóa thông tin không gian và đảm bảo tính chính xác của bản đồ. Nhờ đó, hệ thống có thể cung cấp thông tin chính xác và chi tiết về môi trường đường phố, hỗ trợ trong việc cải thiện an toàn giao thông, cập nhật bản đồ, và phát triển các ứng dụng tự hành.')}
</p>

<center><img src="/assets/mapdata.png" alt="" className="dataimg"/></center>



<center><h2 className="datah2">{t('Tính Toán Chính Xác Đến 99%')}</h2></center>
<p className="datap">{t('Công nghệ phát hiện dữ liệu')} <strong>Streetview.vn </strong>{t('không chỉ nhận diện các đối tượng như người đi bộ, xe cộ, biển báo và cây cối mà còn có khả năng tính toán chính xác khoảng cách giữa các vật thể và chiều rộng của đường. Nhờ các thuật toán đo lường không gian 3D, hệ thống có thể định lượng kích thước và khoảng cách với độ chính xác lên đến')} <strong>99% </strong>,{t('giúp nâng cao tính chính xác trong lập bản đồ, phân tích giao thông và hỗ trợ các công nghệ tự hành.')} </p>
</div>
<center><img src="/assets/mapdatasetft.png" alt="" className="dataimg"/></center>
   <Bannerft/>
    </>
  );
};

export default Staticmap;
