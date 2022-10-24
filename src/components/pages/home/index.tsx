import React from "react";
import "./home.scss";
import Logo from "../../../assets/images/logo.png";

function Home() {
  return (
    <div className="background">
      <div className="login">
        <img className="logo" alt="Refugio Animal de Costa Rica" src={Logo} />
      </div>
    </div>
  );
}

export default Home;
