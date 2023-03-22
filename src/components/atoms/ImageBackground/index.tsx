import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import OceloteImg from "../../../assets/backgrounds/Ocelote.png";
import TucanImg from "../../../assets/backgrounds/Tucan.png";
import RanaImg from "../../../assets/backgrounds/Rana.png";
import IguanaImg from "../../../assets/backgrounds/Iguana.png";

function ImageBackground() {
  const [backgroundImage, setBackgroundImage] = useState(OceloteImg);
  const [imagePosition, setImagePosition] = useState("top-right");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setBackgroundImage(RanaImg);
        setImagePosition("top-right");
        break;
      case "/rescues":
        setBackgroundImage(OceloteImg);
        setImagePosition("top-right");
        break;
      case "/rescues/public":
        setBackgroundImage(TucanImg);
        setImagePosition("top-right");
        break;
      case "/rescues/new":
        setBackgroundImage(IguanaImg);
        setImagePosition("bottom-left");
        break;
      default:
        if (location.pathname.includes("/rescues/edit")) {
          setBackgroundImage(IguanaImg);
          setImagePosition("bottom-left");
        } else {
          setBackgroundImage(OceloteImg);
          setImagePosition("top-right");
        }
    }
  }, [location]);

  return (
    <div className={`background-container ${imagePosition}`}>
      <img
        className="background-image"
        src={backgroundImage}
        alt=""
        role="presentation"
      />
      {location.pathname !== "/rescues/new" && (
        <div className="background-blur" />
      )}
    </div>
  );
}

export default ImageBackground;
