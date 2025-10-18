// @ts-nocheck
import "./index.css";
import { useEffect } from "react";
import Mainabouts from "./main";

const Methodall = () => {
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
        <img src="https://yasuda-method.com/wp/wp-content/uploads/2025/02/method_main-1536x480.jpg" alt="" />
        <h1>Phương pháp giáo dục Yasuda</h1>
      </div>

      <Mainabouts />
      <section className="imgmethod "><img src="https://yasuda-method.com/wp/wp-content/themes/yasuda/images/page/method.png" alt="" /></section>

    </>
  );
};

export default Methodall;
