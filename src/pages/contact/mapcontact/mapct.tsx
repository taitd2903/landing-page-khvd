import { useState, useEffect } from "react";
import "./mapct.css";
import Maps from "../../../layouts/map/map";

const MapContactPage = () => {
  const [showHours, setShowHours] = useState(false);
  const [currentDay, setCurrentDay] = useState("");



  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
    setCurrentDay(today);
  }, []);

  const toggleHours = () => {
    setShowHours(!showHours);
  };

  return (
    <>
      <div className="cardmap">
        <div className="detailsmapall">
          <img src="/assets/44+.png" alt="44+ Technologies" />
          <div className="detailsmap">
            <h2>Vovinam Thân-Tâm</h2>
            <p>Nhà thi đấu Bắc Từ Liêm, P. Võ Quý Huân, Phúc Diễn, Bắc Từ Liêm, Hà Nội</p>
            <div className="infomap">
              <p><strong>Thông tin</strong></p>
              <div className="mapbrd">
                <p
                  className="status"
                  onClick={toggleHours}
                >
                  <img
                    className="closedmap"
                    src="/assets/Leading Icon.svg"
                    alt=""
                  />
                  Đang mở cửa<span className="link">  -  22:00</span>
                </p>
                {showHours && (
                  <div className="hours">
                    <p className={currentDay === "monday" ? "highlight" : ""}>
                      Thứ 2:<span className="spanhro">08:30 - 22:00</span>
                    </p>
                    <p className={currentDay === "tuesday" ? "highlight" : ""}>
                      Thứ 3:<span className="spanhro">08:30 - 22:00</span>
                    </p>
                    <p className={currentDay === "wednesday" ? "highlight" : ""}>
                      Thứ 4:<span className="spanhro">08:30 - 22:00</span>
                    </p>
                    <p className={currentDay === "thursday" ? "highlight" : ""}>
                      Thứ 5:<span className="spanhro">08:30 - 22:00</span>
                    </p>
                    <p className={currentDay === "friday" ? "highlight" : ""}>
                      Thứ 6:<span className="spanhro">08:30 - 22:00</span>
                    </p>
                    <p className={currentDay === "saturday" ? "highlight" : ""}>
                      Thứ 7:<span className="spanhro">08:30 - 22:00</span>
                    </p>
                    <p className={currentDay === "sunday" ? "highlight" : ""}>
                      Chủ nhật:<span className="spanhro">Đóng Cửa</span>
                    </p>
                  </div>
                )}
                <p className="callmap">
                  <img src="/assets/Leading element.svg" alt="" />{" "}
                  <a href="tel:+84333020903">+84 333 020 903</a>
                </p>
                <p className="callmapw">
                  <a
                    href="https://www.facebook.com/vovinamthantam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/Globe.svg" alt="" /> Vovinam Thân-Tâm
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          <div
            style={{
              width: "596px",
              height: "416px",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Maps />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapContactPage;
