import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import OceloteImg from "../../../assets/backgrounds/Ocelote.png";
import TucanImg from "../../../assets/backgrounds/Tucan.png";
import RanaImg from "../../../assets/backgrounds/Rana.png";
import IguanaImg from "../../../assets/backgrounds/Iguana.png";

function ImageBackground() {
  const [backgroundImage, setBackgroundImage] = useState(OceloteImg);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setBackgroundImage(RanaImg);
        break;
      case "/rescues":
        setBackgroundImage(OceloteImg);
        break;
      case "/rescues/public":
        setBackgroundImage(TucanImg);
        break;
      case "/rescues/new":
        setBackgroundImage(IguanaImg);
        break;
      default:
        setBackgroundImage(OceloteImg);
    }
  }, [location]);

  return (
    <div className="background-container">
      <img
        className="background-image"
        src={backgroundImage}
        alt=""
        role="presentation"
      />
      <div className="background-blur" />
    </div>
  );
}

export default ImageBackground;
