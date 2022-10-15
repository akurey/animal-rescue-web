import React from "react";
import UserLogged from "../../atoms/UserLogged";
import "./styles.scss";
import homeIcon from "../../../assets/images/logo.png";

function NavigationBar() {
  return (
    <header className="navigation-container">
      <nav className="navigation-bar">
        {/* TODO change this symbol for the real house Icon */}
        <img className="navigation-bar__home-icon" src={homeIcon} alt="" />
        <UserLogged />
      </nav>
    </header>
  );
}

export default NavigationBar;
