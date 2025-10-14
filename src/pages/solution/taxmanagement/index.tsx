import './index.css'
import { useTranslation } from "react-i18next";
const Index = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="container">

                <div className="textthue">
                    <h2>{t('Quản lý thuế')} </h2>

                    <div className="ullithue">
                        <ul>
                            <center>
                            <li>{t('Chúng tôi ngăn chặn thất thu thuế hàng năm cho cơ quan ban ngành quản lý.')} </li>
                            <li>{t('Các cửa hàng nhỏ lẻ, hộ kinh doanh liên tục thay đổi và việc theo dõi theo cách truyền thống được thực hiện bằng cách khai báo hoặc các khảo sát của địa bàn. Streetview.vn thông qua xử lý hình ảnh với các thuật toán máy học và thị giác số giúp phát hiện các cửa hàng nhỏ lẻ, hộ kinh doanh, công ty mới thành lập một cách dễ dàng.')} </li>
                            <li>
                            {t('Thông tin chính xác và cập nhật bằng cách đối chiếu với cơ quan thuế, cơ quan quan lý. Cho phép xem các thay đổi hàng năm, hàng tháng và hàng ngày với các báo cáo theo khu phố và đường phố.')}
                            </li>
                            </center>
                        </ul>
                    </div>
                </div>

                <div className="imgthue">
                    <img className='imgthuem' src="/assets/Image.png" alt="" />
                </div>

                <div className="taxdiv-banner-container">
                    <div className="taxdiv-banner-content">
                        <h2>{t('Biển quảng cáo, biển hiệu')}</h2>
                        <p>
                        {t('Một trong những tính năng thú vị của Streetview.vn là khả năng tính diện tích, độ cao. Với tính năng này nhanh chóng cung cấp các giải pháp khi cần đo diện tích, chẳng hạn như số tầng của tòa nhà, kích thước của biển hiệu cửa hàng, biển quảng cáo...')}  
                        </p>
                    </div>
                    <div className="taxdiv-banner-image">
                 <img className='img123th' src="/assets/centercafe.png" alt="" />
                    </div>
                </div>

            </div>

        </>
    );
};

export default Index;
