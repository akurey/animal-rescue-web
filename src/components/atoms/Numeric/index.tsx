import React from "react";
import "./styles.scss";

interface NumericProps extends React.HTMLAttributes<HTMLInputElement> {
  numericStyle?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  value?: number;
  placeholder?: string;
  max?: number;
  min?: number;
  step?: number;
  units?: string;
}

function Numeric({
  onClick,
  value,
  numericStyle,
  className,
  disabled,
  placeholder,
  onChange,
  max,
  min,
  step,
  units,
}: NumericProps) {
  return (
    <div className="row">
      <input
        id="numeric"
        type="number"
        onClick={onClick}
        className={`input ${numericStyle} ${className}`}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        max={max}
        min={min || 0}
        step={step}
      />
      {units && <p>{units}</p>}
    </div>
  );
}

export default Numeric;
