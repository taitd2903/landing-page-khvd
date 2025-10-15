
import { useState } from "react";
import { Input, Select, Button, Form, Typography } from "antd";
import "./ContactPage.css";

import { useTranslation } from 'react-i18next';
import MapContactPage from "../contact/mapcontact/mapct";
const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    request: "",
    message: "",
  });

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.request.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleInputChange = (key:string, value:string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      alert("Form đã được gửi thành công!");
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

  return (
    <>
    <div className="container">
      <div className="contact-container">
   
        <div className="contact-form">
          <Title level={2}>{t('Liên hệ')}</Title>
          <Paragraph><p>{t('Chúng tôi rất vui khi được hỗ trợ bạn. Hãy để lại mọi yêu cầu, thắc mắc theo thông tin bên dưới. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể.')}
            </p>
          </Paragraph>
          <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item
              label={t('Họ tên')}
             
              rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
            >
              <Input 
                placeholder={t('Nhập họ tên của bạn')}
  
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label={t('Số điện thoại')}
              rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
            >
              <Input
                placeholder={t('Nhập số điện thoại')}
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Email<span style={{ color: "red" }}> *</span>
                </span>
              }
              rules={[{ required: true, message: "Vui lòng nhập email" }]}
            >
              <Input
                placeholder={t('Nhập email')}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label={
                <span>
                {t('Chúng tôi có thể giúp gì cho bạn')}  <span style={{ color: "red" }}> *</span>
                </span>
              }
              rules={[{ required: true, message: "Vui lòng chọn yêu cầu" }]}
            >
            <Select
  placeholder={t('Hãy chọn yêu cầu')}
  value={formData.request || undefined} 
  onChange={(value) => handleInputChange("request", value)}
>
  <Option value="report">{t('Yêu cầu báo')}</Option>
  <Option value="technical">{t('Tôi gặp vấn đề kỹ thuật')}</Option>
  <Option value="account">{t('Tôi có câu hỏi về tài khoản')}</Option>
  <Option value="other">{t('Vấn đề khác')}</Option>
</Select>

            </Form.Item>

            <Form.Item
              label={t('Tin nhắn')}
              rules={[{ required: true, message: "Vui lòng nhập nội dung tin nhắn" }]}
            >
              <TextArea
                placeholder={t('Nhập nội dung')}
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button"
                disabled={!isFormValid()}
              >
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </div>

       
        <div className="contact-info">
          <div className="company-info">
            <Title level={3}>{t('Vovinam Thân-Tâm')}</Title>
            <Paragraph>
            {t('Chúng tôi tạo ra những sản phẩm công nghệ mới lạ với cấu trúc khác biệt hoàn toàn. Sứ mệnh của chúng tôi xây dựng không gian internet Việt Nam an toàn, mở và miễn phí.')}  
            </Paragraph>
            <Paragraph  className="no-hover prohvclx">
              <a href="https://www.streetview.vn/?lat=21.032796623&lng=105.788024983&picId=e213daed-3ae2-4259-940b-444a4056c101&yaw=279&pitch=30" target="_blank" > <img src="/assets/location.png" alt="Bản đồ địa chỉ" /> {t('Nhà thi đấu Bắc Từ Liêm, P. Võ Quý Huân, Phúc Diễn, Bắc Từ Liêm, Hà Nội')}</a>
             
            </Paragraph>
            <Paragraph className="no-hover prohvclx">
              <a href="tel:+84.333.020.903"><img src="/assets/call.png" /> +84.333.020.903</a>
            </Paragraph>
    
            <Paragraph  className="no-hover prohvclx ">
              <a href="#" target="_blank"> <img src="/assets/Vector1.png"  /> taitd2903@gmail.com </a>
             
            </Paragraph>
            {/* <Paragraph  className="no-hover prohvclx ">
              <a href="https://www.streetview.vn/" target="_blank"> <img src="/assets/map.png"  /> https://www.streetview.vn/</a>
             
            </Paragraph> */}
            <Paragraph  className="no-hover prohvclx">
              <a href="https://www.facebook.com/vovinamthantam/" target="_blank"> <img src="/assets/globe.png"  /> Vovinam Thân Tâm</a>
             
            </Paragraph>
          </div>
          <div className="company-image">
          {/* <img src="/assets/image01.svg" alt="Company image" /> */}
          <MapContactPage/> 
           </div>
        </div>
        
      </div>
      
    </div>
    
    </>
  );
};

export default ContactPage;
