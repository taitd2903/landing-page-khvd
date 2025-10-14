
import './bannerft.css';
import { useTranslation } from "react-i18next";
const Bannerft = () => {
    const isActiveLink = (path: string) => {
        return path === location.pathname;
    };
    const { t } = useTranslation();
    return (
        <>
            <div className="container ctnftprobn">
                <div className="cnt">
                    <div className="bannerfooter">
                        <div className="overlay"></div>
                        <div className="ftmpro">
                        </div>
                        <div className="contentproft">
                            <h1>{t('Bạn đã sẵn sàng trải nghiệm')} <br /> Streetview.vn?</h1>
                            <button className="clbgr-buttonproimgft">
                                <a
                                    href="https://www.streetview.vn/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={isActiveLink('/map') ? 'active' : ''}
                                >
                                    {t('Khám Phá Bản Đồ')} <img className='svgproft' src="/assets/Vector190(Stroke).svg" alt="" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div></div>
        </>
    );
};

export default Bannerft;
