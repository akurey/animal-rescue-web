import React from "react";
import "./styles.scss";
import OceloteImg from "../../../assets/backgrounds/Ocelote.png";

function ImageBackground() {
  return (
    <div className="background-container">
      <img
        className="background-image"
        src={OceloteImg}
        alt=""
        role="presentation"
      />
      <div className="background-blur" />
    </div>
  );
}

export default ImageBackground;
