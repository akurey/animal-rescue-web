import React, { useState } from "react";
import "./styles.scss";

interface TextAreaProps extends React.HTMLAttributes<HTMLInputElement> {
  textAreaStyle?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  value: string;
  placeholder: string;
}

function TextArea({
  onClick,
  textAreaStyle,
  disabled,
  placeholder,
  value,
  onChange,
}: TextAreaProps) {
  const [valueInput, setValueInput] = useState(value);

  const onChangeInput = (e: any) => {
    setValueInput(e.target.value);
    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <textarea
      onClick={onClick}
      className={`input ${textAreaStyle}`}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChangeInput}
      value={valueInput}
    />
  );
}

export default TextArea;
