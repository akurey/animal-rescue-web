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

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  onClick: () => void;
  buttonStyle?: string;
  buttonSize?: string;
  disabled?: boolean;
}

const Button = (
  {
    children,
    onClick,
    buttonStyle,
    buttonSize,
    disabled,
  } : ButtonProps
) => {
  const setButtonStyle = STYLES.includes(buttonStyle!) ? buttonStyle : STYLES[0];
  const setButtonSize = STYLES.includes(buttonSize!) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      className={`btn ${setButtonStyle} ${setButtonSize}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
