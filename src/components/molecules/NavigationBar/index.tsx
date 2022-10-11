import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import UserLogged from "../../atoms/UserLogged";
import "./styles.scss";

function NavigationBar() {
  return (
    <header className="navigation-container">
      <nav className="navigation-bar">
        {/* TODO change this symbol for the real house Icon */}
        <HomeIcon className="navigation-bar__home-icon" fontSize="medium" />
        <UserLogged />
      </nav>
    </header>
  );
}

export default NavigationBar;
