import './index.css'
import Card from './card/card';
import { useTranslation } from "react-i18next";
const Index = () => {
    const { t } = useTranslation();
    return (
        <>
        <div className="container">
            <div className="headerimmer">
            <h2>{t('Xây dựng trải nghiệm nhập vai')}</h2>
            <p>{t('Streetview sẽ trở thành một công cụ quan trọng không chỉ cho người dùng cá nhân mà còn cho các doanh nghiệp, nhà nghiên cứu,')} <br />
            {t('và nhiều lĩnh vực khác trong việc cung cấp quan điểm địa lý thực tế qua không gian mạng.')}  </p>
            <img src="/assets/Imageframe.png" alt="" />
            </div>

            <div className="mainimmer">
            <h2>{t('Tạo trải nghiệm ảo với chế độ xem phố')}</h2>
            <p>{t('Streetview cho phép người dùng khám phá thế giới qua hình ảnh toàn cảnh 360 độ ở cấp độ đường phố.')} <br />
            {t('Dưới đây là một số điểm nổi bật về tính năng này:')} </p>
            </div>
        </div>
<Card/>
        </>
        
    );
};

export default Index;
