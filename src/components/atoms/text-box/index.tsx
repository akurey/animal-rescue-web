import React, { useState } from "react";
import "./styles.scss";

interface TextBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  textBoxStyle?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  value: string;
  placeholder: string;
}

function TextBox({
  onClick,
  textBoxStyle,
  disabled,
  placeholder,
  value,
  onChange,
}: TextBoxProps) {
  const [valueInput, setValueInput] = useState(value);

  const onChangeInput = (e: any) => {
    setValueInput(e.target.value);
    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <input
      type="textbox"
      onClick={onClick}
      className={`input ${textBoxStyle}`}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChangeInput}
      value={valueInput}
    />
  );
}

export default TextBox;
