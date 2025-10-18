import  {  useEffect } from "react";
import "./home.css";
import Sliderhome from "./slider";

import Mainhome from "./main";


const StreetView = () => {

  

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
<Sliderhome />
<Mainhome />
    </>
  );
};

export default StreetView;
