import React, { useState } from "react";
import "./styles.scss";

interface NumericProps extends React.HTMLAttributes<HTMLInputElement> {
  numericStyle?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  description?: string;
  value?: number;
  placeholder?: string;
  max?: number;
  min?: number;
  step?: number;
  units?: string;
}

function Numeric({
  onClick,
  numericStyle,
  disabled,
  placeholder,
  value,
  onChange,
  description,
  max,
  min,
  step,
  units,
}: NumericProps) {
  const [valueInput, setValueInput] = useState(value);
  const onChangeInput = (e: any) => {
    setValueInput(e.target.value);
    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <div className="form-numeric">
      <label htmlFor="numeric" className="input--label">
        {description}
      </label>
      <div className="row">
        <input
          id="numeric"
          type="number"
          onClick={onClick}
          className={`input ${numericStyle}`}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChangeInput}
          value={valueInput}
          max={max}
          min={min}
          step={step}
        />
        {units && <p className="input--label">{units}</p>}
      </div>
    </div>
  );
}

export default Numeric;
