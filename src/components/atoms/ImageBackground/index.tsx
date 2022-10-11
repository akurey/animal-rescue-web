import React from "react";
import "./styles.scss";
import OceloteImg from "../../../assets/backgrounds/Ocelote.png";
import TucanImg from "../../../assets/backgrounds/Tucan.png";

interface ImageBackgroundProps extends React.HTMLAttributes<HTMLImageElement> {
  imageName: String;
  alt?: String;
}

function ImageBackground({ imageName, alt }: ImageBackgroundProps) {
  return (
    <div className="background-container">
      <img
        className="background-image"
        src={imageName === "Ocelote.png" ? OceloteImg : TucanImg}
        alt={alt && ""}
        role="presentation"
      />
      <div className="background-blur" />
    </div>
  );
}

export default ImageBackground;
