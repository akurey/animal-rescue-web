import React, { useState } from "react";
import "./styles.scss";

interface TextAreaProps extends React.HTMLAttributes<HTMLInputElement> {
  textAreaStyle?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  description?: string;
  value: string;
  placeholder: string;
}

function TextArea({
  onClick,
  textAreaStyle,
  disabled,
  placeholder,
  description,
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
    <div className="textarea">
      {description && <label htmlFor="textarea">{description}</label>}
      <textarea
        id="textarea"
        onClick={onClick}
        className={`input ${textAreaStyle}`}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeInput}
        value={valueInput}
      />
    </div>
  );
}

export default TextArea;
