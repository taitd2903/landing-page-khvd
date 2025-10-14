//@ts-nocheck
import React, { useState } from 'react';
import { Dropdown, Menu, Drawer, Button } from 'antd';
import { AiOutlineDown  } from "react-icons/ai";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  const loginUrl = import.meta.env.VITE_URL_LOGIN;
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('service');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []); // Chỉ mở menu mới nhất
  };
  const [openKeys, setOpenKeys] = useState([]); // Quản lý các menu đang mở
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const languageMenu = (
    <Menu className="custom-language-menu">
      <Menu.Item
        key="vi"
        onClick={() => i18n.changeLanguage('vi')}
        className={i18n.language === 'vi' ? 'language-selected' : ''}
      >
        <div className="language-item">
          <img src="/assets/VN.png" alt="Vietnam Flag" className="flag-iconmini" />
          Tiếng Việt
        </div>
      </Menu.Item>
      <Menu.Item
        key="en"
        onClick={() => i18n.changeLanguage('en')}
        className={i18n.language === 'en' ? 'language-selected' : ''}
      >
        <div className="language-item">
          <img src="/assets/flagen.svg" alt="English Flag" className="flag-iconmini" />
          English
        </div>
      </Menu.Item>
    </Menu>
  );



  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsDrawerOpen(false); 
    setIsMenuOpen(false);  
  };


  const isActiveLink = (path: string) => location.pathname === path;

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };


  const megaDropdownContent = (
    <div className="mega-dropdown">

      <div className="mega-dropdown-left">
        <div
          className={`mega-dropdown-tab ${activeTab === 'service' ? 'active' : ''}`}
          onClick={() => setActiveTab('service')}
        >
          <img src="/assets/dichvuhd.png" alt="Dịch vụ" /> {t('Dịch vụ')}
        </div>
        <div
          className={`mega-dropdown-tab ${activeTab === 'solution' ? 'active' : ''}`}
          onClick={() => setActiveTab('solution')}
        >
          <img src="/assets/giaiphaphd.png" alt="Giải pháp" /> {t('Giải pháp')}
        </div>
      </div>


      <div className="mega-dropdown-middle">
        {activeTab === 'service' ? (
          <ul>
              <Link to="/service/3d-images" onClick={handleMenuItemClick}> 
               <li className={isActiveLink('/service/3d-images') ? 'active' : ''}>
                {t('Hình ảnh 3D')}
            </li> </Link>

          <Link to="/service/street-view" onClick={handleMenuItemClick}>  
           <li className={isActiveLink('/service/street-view') ? 'active' : ''}>
           {t('Chế độ xem phố')}
           
            </li>  
             </Link>

             <Link to="/service/static-map" onClick={handleMenuItemClick}>
            <li className={isActiveLink('/service/static-map') ? 'active' : ''}>
             
                {t('Bản đồ tĩnh')}
          
            </li>
    </Link>

          </ul>
        ) : (
          <ul>    <Link to="/solution/immersive-experience" onClick={handleMenuItemClick}>
            <li className={isActiveLink('/solution/immersive-experience') ? 'active' : ''}>
          
                {t('Trải nghiệm nhập vai')}
            
            </li>  </Link>


          <Link to="/solution/open-data" onClick={handleMenuItemClick}>    <li className={isActiveLink('/solution/open-data') ? 'active' : ''}>
            
                {t('Dữ liệu mở')}
            
            </li>  </Link>
          <Link to="/solution/ideal-location" onClick={handleMenuItemClick}>  <li className={isActiveLink('/solution/ideal-location') ? 'active' : ''}>
              
                {t('Vị trí lý tưởng')}
           
            </li>   </Link>
           <Link to="/solution/object-detection" onClick={handleMenuItemClick}>  <li className={isActiveLink('/solution/object-detection') ? 'active' : ''}>
             
                {t('Phát hiện phân tích đối tượng')}
            
            </li>  </Link>
          </ul>
        )}
      </div>


      <div className="mega-dropdown-right">
        {activeTab === 'service' ? (
          <ul>
          <Link to="/service/map-dataset" onClick={handleMenuItemClick}>  <li className={isActiveLink('/service/map-dataset') ? 'active' : ''}>
              
                {t('Bộ dữ liệu bản đồ')}
             
            </li> </Link>
          <Link to="/service/auto-fill" onClick={handleMenuItemClick}>     <li className={isActiveLink('/service/auto-fill') ? 'active' : ''}>
           
                {t('Tự động điền')}
        
            </li>      </Link>
             <Link to="/service/geolocation" onClick={handleMenuItemClick}>      <li className={isActiveLink('/service/geolocation') ? 'active' : ''}>
       
                {t('Vị trí địa lý')}
           
            </li>   </Link>
          </ul>
        ) : (
          <ul>
             <Link to="/solution/self-driving" onClick={handleMenuItemClick}> <li className={isActiveLink('/solution/self-driving') ? 'active' : ''}>
            
                {t('Giải pháp xe tự hành')}
            
            </li>  </Link>
             <Link to="/solution/grid-management" onClick={handleMenuItemClick}> <li className={isActiveLink('/solution/grid-management') ? 'active' : ''}>
            
                {t('Quản lý mạng lưới điện')}
            
            </li>  </Link>
            
              <Link to="/solution/tax-management" onClick={handleMenuItemClick}><li className={isActiveLink('/solution/tax-management') ? 'active' : ''}>
                {t('Quản lý thuế')}
              
            </li></Link>
          </ul>
        )}
      </div>
    </div>
  );


  const resourcesMenu = (
    <Menu
      items={[
        {
          key: 'openmap',
          label: (
            <Link to="/openmap" className={isActiveLink('/openmap') ? 'active' : ''}>
              Openmap.vn
            </Link>  
          ),
        },
        // {
        //   key: 'openstreetmap',
        //   label: (
        //     <Link to="/OpenStreetMap" className={isActiveLink('/OpenStreetMap') ? 'active' : ''}>
        //       OpenStreetMap
        //     </Link>
        //   ),
        // },
      ]}
    />
  );
  

  return (
    <header className="header">
      <nav className="header-menu">
        <div className="header-logo">
          <Link to="/">
            <img src="/assets/Logostreetview.svg" alt="Logo" className="header-logo-image" />
          </Link>
        </div>

        <Link to="/about" className={isActiveLink('/about') ? 'active' : ''}>
          {t('Về chúng tôi')}
        </Link>

        <Dropdown
  overlay={megaDropdownContent}
  trigger={['click']}
  placement="bottom"
  open={isMenuOpen}
  onOpenChange={(open) => setIsMenuOpen(open)}
>
  <a 
    href="#services" 
    className={`dropdown-link ${isActiveLink('/service') || isActiveLink('/solution') ? 'active' : ''}`}
  >
    {t('Dịch vụ & Giải pháp')} 
    <img src="/assets/Iconmuiten.svg" alt="icon" className="dropdown-icon" />
  </a>
</Dropdown>


        <Dropdown overlay={resourcesMenu} trigger={['click']} placement="bottom">
  <a 
    href="#resources" 
    className={`dropdown-link ${isActiveLink('/openmap') || isActiveLink('/OpenStreetMap') ? 'active' : ''}`}
  >
    {t('Nguồn lực')} <img src="/assets/Iconmuiten.svg" alt="icon" className="dropdown-icon" />
  </a>
</Dropdown>


        <a
          href="https://www.streetview.vn/"
          target="_blank"
          rel="noopener noreferrer"
          className={isActiveLink('/map') ? 'active' : ''}
        >
          {t('Bản đồ')}
        </a>

        <Link to="/contact" className={isActiveLink('/contact') ? 'active' : ''}>
          {t('Liên hệ')}
        </Link>
        <Link to="/pricing" className={isActiveLink('/pricing') ? 'active' : ''}>
          {t('Bảng giá')}
        </Link>

        <div className="header-actions">
          <Dropdown overlay={languageMenu} trigger={['click']} placement="bottomRight">
            <button className="header-language-button">
              <img
                src={i18n.language === 'vi' ? '/assets/flvn.svg' : '/assets/flagen.svg'}
                alt={i18n.language === 'vi' ? 'Vietnam Flag' : 'English Flag'}
                className="flag-icon"
              />
            </button>
          </Dropdown>

          <button className="header-login-button" onClick={() => {
            window.location.href = loginUrl;
          }}>{t('Đăng Nhập')}</button>

        </div>
      </nav>

      <Link to="/">
        <img src="/assets/Logostreetview.svg" alt="Logo" className="header-logo-image-mobile" />
      </Link>
      <Button
        className="menu-button"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
      />

<Drawer
      placement="top"
      onClose={toggleDrawer}
      open={isDrawerOpen}
      width={250}
      closeIcon={null}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '15px',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <a href="/">
          <img
            src="/assets/Logostreetview.svg"
            alt="Logo"
            className="header-logo-image-mobile"
          />
        </a>
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#000',
          }}
          onClick={toggleDrawer}
        >
          <CloseOutlined />
        </button>
      </div>
      <Menu
        mode="inline"
        openKeys={openKeys} // Gắn trạng thái mở của menu
        onOpenChange={onOpenChange} // Sự kiện khi menu mở/đóng
        onClick={toggleDrawer} // Đóng Drawer khi chọn menu
        items={[
          {
            key: '1',
            label: (
              <Link to="/about" className={isActiveLink('/about') ? 'active' : ''}>
                {t('Về chúng tôi')}
              </Link>
            ),
          },
          {
            key: '2',
            label: <span>{t('Dịch vụ')}</span>,
            children: [
              { key: '2-1', label: <Link to="/service/3d-images">{t('Hình ảnh 3D')}</Link> },
              { key: '2-2', label: <Link to="/service/street-view">{t('Chế độ xem phố')}</Link> },
              { key: '2-3', label: <Link to="/service/static-map">{t('Bản đồ tĩnh')}</Link> },
              { key: '2-5', label: <Link to="/service/map-dataset">{t('Bộ dữ liệu bản đồ')}</Link> },
              { key: '2-6', label: <Link to="/service/auto-fill">{t('Tự động điền')}</Link> },
              { key: '2-7', label: <Link to="/service/geolocation">{t('Vị trí địa lý')}</Link> },
            ],
          },
          {
            key: '3',
            label: <span>{t('Giải pháp')}</span>,
            children: [
              { key: '3-1', label: <Link to="/solution/immersive-experience">{t('Trải nghiệm nhập vai')}</Link> },
              { key: '3-2', label: <Link to="/solution/open-data#services">{t('Dữ liệu mở')}</Link> },
              { key: '3-3', label: <Link to="/solution/ideal-location">{t('Vị trí lý tưởng')}</Link> },
              { key: '3-4', label: <Link to="/solution/object-detection">{t('Phát hiện phân tích đối tượng')}</Link> },
              { key: '3-5', label: <Link to="/solution/self-driving">{t('Giải pháp xe tự hành')}</Link> },
              { key: '3-6', label: <Link to="/solution/grid-management">{t('Quản lý mạng lưới điện')}</Link> },
              { key: '3-7', label: <Link to="/solution/tax-management">{t('Quản lý thuế')}</Link> },
            ],
          },
          {
            key: '4',
            label: <span>{t('Nguồn lực')}</span>,
            children: [
              { key: '4-1', label: <Link to="/openmap">{t('Openmap.vn')}</Link> },
              // { key: '4-2', label: <Link to="/openstreetmap">{t('OpenStreetMap')}</Link> },
            ],
          },
          {
            key: '5',
            label: (
              <a href="https://www.streetview.vn/" target="_blank" rel="noopener noreferrer">
                {t('Bản đồ')}
              </a>
            ),
          },
          {
            key: '6',
            label: (
              <Link to="/contact" className={isActiveLink('/contact') ? 'active' : ''}>
                {t('Liên hệ')}
              </Link>
            ),
          },
          {
            key: '7',
            label: (
              <Link to="/pricing" className={isActiveLink('/pricing') ? 'active' : ''}>
                {t('Bảng giá')}
              </Link>
            ),
          },
        ]}
      />
      <div className="custom-language-menulg"           style={{
            display: 'flex',
            alignItems: 'center',
           marginLeft: '28px',
           marginTop : '11px',
           marginBottom: '22px',
          }}>
        <div
          className={`language-item ${i18n.language === 'vi' ? 'selected' : ''}`}
          onClick={() => handleLanguageChange('vi')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <img
            src="/assets/VN.png"
            alt="Vietnam Flag"
            style={{ width: '24px', height: '24px', borderRadius: '50%', padding: '2px' }}
          />
          <span>VN</span>
        </div>
        <div
          className={`language-item ${i18n.language === 'en' ? 'selected' : ''}`}
          onClick={() => handleLanguageChange('en')}
          style={{ marginLeft: '150px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img
            src="/assets/flagen.svg"
            alt="English Flag"
            style={{ width: '24px', height: '24px', borderRadius: '50%', padding: '2px' }}
          />
          <span>UK</span>
        </div>
      </div>
      <Button
        className="btnhdmn"
        onClick={() => {
          window.location.href = loginUrl;
        }}
      >
        {t('Đăng Nhập')}
      </Button>
    </Drawer>

    </header>

  );
};

export default Header;
