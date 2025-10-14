
import './index.css';
import { useTranslation } from "react-i18next";
function App() {

    const { t } = useTranslation();
    return (
    <>
    <div className="bgrclost">
        <div className="container">
            <div className="otm-container">
                <section className="otm-section otm-section-colored">
                
                    <div className="otm-section-content otm-two-columns">

                        <div className="otm-text-content">   
                             <h2 className="otm-section-title">{t('Khởi đầu với OpenStreetMap')}</h2>
                             <ul>

                                <li>{t('OpenStreetMap có vai trò đóng góp vào việc xây dựng và phát triển các dự án công nghệ của chúng tôi. Ngoài ra, với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi sẵn sàng hợp tác để nghiên cứu và triển khai các giải pháp công nghệ tiên tiến.')} </li>
                                <li>{t('Thông qua việc trao đổi và học hỏi lẫn nhau, chúng tôi mong muốn tạo ra một cộng đồng công nghệ kết nối và phát triển bền vững. Hãy cùng chúng tôi đẩy mạnh sự sáng tạo và khám phá những tiềm năng mới trong lĩnh vực công nghệ.')}</li>
                             </ul>
                         
                        </div>

                        <div className="otm-image-content">
                            <img
                                src="/assets/Untitled.png"
                                alt="OpenStreetMap"
                                className="otm-section-image"
                            />
                        </div>
                    </div>
                </section>


            
            </div>
            </div>
            </div>  
            <div className="container">  
            <section className="otm-section otm-section-plain">
                <h2 className="otm-section-title"> <center>{t('Hợp tác cùng phát triển')}</center>   </h2>
                    <div className="otm-section-content">
                        <p><center>
                        {t('Chúng tôi hợp tác chia sẻ dữ liệu bản đồ trong mạng lưới OpenStreetMap, với mục tiêu tạo ra những dữ liệu bản đồ chi tiết và chính xác nhất cho Việt Nam. Streetview.vn cung cấp hình ảnh đường phố miễn phí và công khai cho nguồn dữ liệu trên OpenStreetMap, nhằm phục vụ công tác xác thực dữ liệu. Bản đồ nền của Streetview.vn được sử dụng và cải thiện từ OpenStreetMap để tạo ra một bản đồ chi tiết và đảm bảo toàn vẹn lãnh thổ Việt Nam.')}
                           </center>
                        </p>
                        <img
                            src="/assets/macmap.png"
                            alt="Hợp tác phát triển"
                            className="otm-section-image"
                        />
                    </div>
                </section>
                </div>
            </>
    );
}

export default App;
