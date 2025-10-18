//@ts-nocheck
import './aboutus.css';

import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Mainabouts from './main';
const AboutPage = () => {
  const isActiveLink = (path: string) => location.pathname === path;
  const location = useLocation();
  const { t } = useTranslation();

  return (
   <>
   <div className='aboutusbanner'>
   <img src="https://yasuda-method.com/wp/wp-content/uploads/2025/02/yasudashiki_main.jpg" alt="" />
   <h1>Viện nghiên cứu trò chơi giáo dục thể chất là gì ?</h1>
   </div>
   <Mainabouts />
   </>
  );
}

export default AboutPage;
