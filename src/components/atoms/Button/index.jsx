import React from "react";

import "./styles.scss";
const STYLES = [
  "btn--primary",
  "btn--secondary",
  "btn--success",
  "btn--danger",
  "btn--warning",
  "btn--link",
];
const SIZES = ["btn--medium", "btn--small"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize, disabled }) => {
  const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const setButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${setButtonStyle} ${setButtonSize}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
