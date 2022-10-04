import React from "react";
import UserLogged from "../../atoms/UserLogged";
import "./styles.scss";

function NavigationBar() {
  return (
    <header className="navigation-container">
      <nav className="navigation-bar">
        {/* TODO change this symbol for the real house Icon */}
        <div className="navigation-bar__home-icon">&#8962;</div>
        <UserLogged />
      </nav>
    </header>
  );
}

export default NavigationBar;
