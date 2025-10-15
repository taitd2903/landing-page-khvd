import  { useState, useEffect } from "react";
import "./home.css";
import Sliderhome from "./slider";
import { useTranslation } from 'react-i18next';
import Mainhome from "./main";


const StreetView = () => {

  const { t } = useTranslation();



  return (
    <>
<Sliderhome />
<Mainhome />
    </>
  );
};

export default StreetView;
