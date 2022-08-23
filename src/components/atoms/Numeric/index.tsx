import React, { useState } from "react";
import "./styles.scss";

interface NumericProps extends React.HTMLAttributes<HTMLInputElement> {
  numericStyle?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  validators?: any[];
  description?: string;
  value?: number;
  className?: string;
  placeholder?: string;
  max?: number;
  min?: number;
  step?: number;
}

function Numeric({
  onClick,
  numericStyle,
  disabled,
  placeholder,
  value,
  onChange,
  validators,
  description,
  className,
  max,
  min,
  step,
}: NumericProps) {
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
    <div className="form-numeric">
      <label htmlFor="input" className="input--label">
        {description}
      </label>
      <input
        id="numeric"
        type="number"
        onClick={onClick}
        className={`
      input
      ${numericStyle}
      ${error?.message && "input--error"}
      ${className}
      `}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChangeInput}
        value={valueInput}
        max={max}
        min={min}
        step={step}
      />
      {error?.message && <p className="message--error">{error?.message}</p>}
    </div>
  );
}

export default Numeric;
