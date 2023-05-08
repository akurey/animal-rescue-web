import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import OceloteImg from "../../../assets/backgrounds/Ocelote.png";
import TucanImg from "../../../assets/backgrounds/Tucan.png";
import RanaImg from "../../../assets/backgrounds/Rana.png";
import IguanaImg from "../../../assets/backgrounds/Iguana.png";
import {
  LOGIN_ROUTE,
  RESCUE_NEW_ROUTE,
  RESCUE_PUBLIC_ROUTE,
  RESCUE_ROUTE,
  RESCUE_VIEW_ROUTE,
} from "../../../constants/routes.types";

function ImageBackground() {
  const [backgroundImage, setBackgroundImage] = useState(OceloteImg);
  const [imagePosition, setImagePosition] = useState("top-right");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case LOGIN_ROUTE:
        setBackgroundImage(RanaImg);
        setImagePosition("top-right");
        break;
      case RESCUE_ROUTE:
        setBackgroundImage(OceloteImg);
        setImagePosition("top-right");
        break;
      case RESCUE_PUBLIC_ROUTE:
        setBackgroundImage(TucanImg);
        setImagePosition("top-right");
        break;
      case RESCUE_NEW_ROUTE:
        setBackgroundImage(IguanaImg);
        setImagePosition("bottom-left");
        break;
      default:
        if (
          location.pathname.includes(
            RESCUE_VIEW_ROUTE.replace("/:animalId", "")
          )
        ) {
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
      {location.pathname !== RESCUE_NEW_ROUTE && (
        <div className="background-blur" />
      )}
    </div>
  );
}

export default ImageBackground;
