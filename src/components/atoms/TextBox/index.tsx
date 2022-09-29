import React, { useState } from "react";
import "./styles.scss";

interface TextBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  textBoxStyle?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  validators?: any[];
  type?: string;
  description?: string;
  value?: string;
  className?: string;
  placeholder: string;
}

function TextBox({
  onClick,
  textBoxStyle,
  disabled,
  placeholder,
  value,
  onChange,
  validators,
  type,
  description,
  className,
}: TextBoxProps) {
  const [valueInput, setValueInput] = useState(value);
  const [error, setError] = useState({ message: null, validator: () => {} });

  const validateInput = (valueValidate: string) => {
    const validationError = validators?.find(
      (v) => !v.validator(valueValidate)
    );
    if (error !== validationError) {
      setError(validationError);
    }
  };

  const onChangeInput = (e: any) => {
    validateInput(e.target.value);
    setValueInput(e.target.value);
    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <div className="form-textbox">
      <label htmlFor="input" className="input--label">
        {description}
      </label>
      <input
        id="input"
        type={type}
        onClick={onClick}
        className={`
          input
          ${textBoxStyle}
          ${error?.message && "input--error"}
          ${className}
        `}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeInput}
        value={valueInput}
      />
      {error?.message && <p className="message--error">{error?.message}</p>}
    </div>
  );
}

export default TextBox;
