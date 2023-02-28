import React, { useState } from "react";
import "./styles.scss";

interface PasswordTextBoxProps extends React.HTMLAttributes<HTMLInputElement> {
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
  loginError?: string;
}

function PasswordTextBox({
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
  loginError,
}: PasswordTextBoxProps) {
  const [valueInput, setValueInput] = useState(value);
  const [error, setError] = useState({ message: null, validator: () => {} });
  const [visible, setVisibility] = useState(false);

  const validateInput = (valueValidate: string) => {
    const validationError = validators?.find(
      (v) => !v.validator(valueValidate)
    );
    if (error !== validationError) {
      setError(validationError);
    }
  };

  const changeVisibility = () => {
    setVisibility(!visible);
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
      {description && (
        <label htmlFor="input" className="form-field--label">
          {description}
        </label>
      )}
      <div>
        <input
          id="input"
          type={visible ? "text" : "password"}
          onClick={onClick}
          className={`
          input
          ${textBoxStyle}
          ${error?.message && "input--error"}
          ${loginError && "input--error"}
          ${className}
        `}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChangeInput}
          value={valueInput}
        />
        {type === "password" && (
          <i
            role="button"
            tabIndex={0}
            id="togglePassword"
            className="material-icons"
            onClick={changeVisibility}
            onKeyPress={changeVisibility}
          >
            {visible ? "visibility_off" : "visibility"}
          </i>
        )}
      </div>
      {error?.message && <p className="message--error">{error?.message}</p>}
      {loginError && <p className="message--error">{loginError}</p>}
    </div>
  );
}

export default PasswordTextBox;
