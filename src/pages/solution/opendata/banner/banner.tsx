import React, { useState, useEffect, useRef } from "react";
import { Card, Avatar, Carousel, Typography, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./banner.css";
import { useTranslation } from "react-i18next";
const { Title, Paragraph } = Typography;

interface UserData {
  id: number;
  image: string;
  avatar: string;
  name: string;
  role: string;
}

const data: UserData[] = [
  { id: 1, image: "/assets/colleen.svg", avatar: "/assets/collenavt.svg", name: "Colleen", role: "Người dùng" },
  { id: 2, image: "/assets/TestimonialImage.svg", avatar: "/assets/thanhnguyen.svg", name: "Thanh Nguyen", role: "Người dùng" },
  { id: 3, image: "/assets/tuannguyen.svg", avatar: "/assets/tuannguyenavt.svg", name: "Tuan Nguyen", role: "Người dùng" },
  { id: 4, image: "/assets/colleen.svg", avatar: "/assets/collenavt.svg", name: "Colleen", role: "Người dùng" },
  { id: 5, image: "/assets/tuannguyen.svg", avatar: "/assets/tuannguyenavt.svg", name: "Tuan Nguyen", role: "Người dùng" },
];

const App: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(3);
  const [centerPadding, setCenterPadding] = useState<string>("13%");
  const [showArrows, setShowArrows] = useState<boolean>(true); 
  const carouselRef = useRef<any>(null);

  const updateCarouselSettings = () => {
    const width = window.innerWidth;

    if (width <= 361) {
      setSlidesToShow(1);
      setShowArrows(false); 
      setCenterPadding("2%");
    } else if (width <= 390) {
      setSlidesToShow(1);
      setShowArrows(false); 
      setCenterPadding("6%");
    } else if (width <= 650) {
      setShowArrows(false); 
      setSlidesToShow(1);
      setCenterPadding("9%");
    } else if (width <= 698) {
      setSlidesToShow(2);
      setShowArrows(false); 
      setCenterPadding("0%");
    } else if (width <= 780) {
      setShowArrows(false); 
      setSlidesToShow(2);
      setCenterPadding("4%");
      setShowArrows(false); 
    } else if (width <= 822) {
      setSlidesToShow(2);
      setCenterPadding("7%");
      setShowArrows(false); 
    } else if (width <= 900) {
      setSlidesToShow(2);
      setCenterPadding("10%");
      setShowArrows(false); 
    } else if (width <= 1050) {
      setSlidesToShow(2);
      setCenterPadding("13%");
      setShowArrows(false); 
    } else if (width < 1395) {
      setSlidesToShow(3);
      setCenterPadding("3%");
      setShowArrows(true); 
    } else {
      setSlidesToShow(3);
      setCenterPadding("13%");
      setShowArrows(true);
    }
  };

  useEffect(() => {
    updateCarouselSettings(); 

    const handleResize = () => {
      updateCarouselSettings(); 
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  useEffect(() => {
    updateCarouselSettings(); 
  }, []); 
  const { t } = useTranslation();
  return (
    <div style={{ background: "var(--REF-Primary-100, rgba(232, 248, 246, 1))"
      ,paddingBottom:'80px'
    }}>
      <div style={{ textAlign: "center", marginBottom: "30px"



       }}>
       
          <h2  style={{ textAlign: "center", marginBottom: "30px",fontFamily: "Inter",paddingTop:'80px',
fontSize: '34px',
fontWeight: '600',
lineHeight: '35px',
letterSpacing: '-0.01em',
color:'var(--SYS-Primary-primary, rgba(20, 184, 166, 1))'



       }}>{t('Dữ liệu mở')}</h2>
     
        <Paragraph style={{ maxWidth: "1040px", margin: "0 auto", color: "#666" ,fontSize:'17px', padding:"0 12px" }}>
        {t('Dữ liệu mở là khái niệm chỉ việc cung cấp quyền truy cập và sử dụng dữ liệu cho tất cả mọi người mà không có hạn chế quá mức. Trong bối cảnh của Streetview.vn, dữ liệu mở có nghĩa là cộng đồng người dùng có thể tự do chia sẻ, sử dụng và đôi khi điều chỉnh dữ liệu bản đồ cho các mục đích khác nhau. Điều này không chỉ giúp tăng cường khả năng tiếp cận thông tin mà còn tạo ra một môi trường hợp tác, nơi mọi người có thể đóng góp và nhận lại giá trị từ cộng đồng.')}  
        </Paragraph>
      </div>

      <div style={{ position: "relative", textAlign: "center" }}>
        <Carousel
          ref={carouselRef}
          dots={false}
          centerMode={true}
          centerPadding={centerPadding}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          {data.map((item) => (
            <div key={item.id} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  maxWidth: "334px", 
                  height: "524px",
                  borderRadius: "10px",
                  textAlign: "center",
                  margin: "10px",
                }}
              >
                <div style={{ padding: "10px" }}>
                  <img
                    alt={item.name}
                    src={item.image}
                    style={{
                      width: "248px",
                      borderRadius: "10px",
                      height: "304px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Avatar
                    src={item.avatar}
                    size={50}
                    style={{ marginBottom: "10px" }}
                  />
                  <Title level={5} style={{ margin: "5px 0" }}>
                    {item.name}
                  </Title>
                  <Paragraph style={{ color: "#888" }}>
  {t('Người Dùng', { role: item.role })}
</Paragraph>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>

        {showArrows && (
          <>
            <Button
              style={{
                position: "absolute",
                top: "50%",
                left: "12.5%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              }}
              onClick={() => carouselRef.current?.prev()} 
              icon={<LeftOutlined style={{ fontSize: "16px", color: "#008c8c" }} />}
            />
            <Button
              style={{
                position: "absolute",
                top: "50%",
                right: "12.5%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              }}
              onClick={() => carouselRef.current?.next()} 
              icon={<RightOutlined style={{ fontSize: "16px", color: "#008c8c" }} />}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
