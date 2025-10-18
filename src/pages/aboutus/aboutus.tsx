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
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
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
