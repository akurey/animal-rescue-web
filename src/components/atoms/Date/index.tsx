import React from "react";
import "./styles.scss";

interface DateProps extends React.HTMLAttributes<HTMLInputElement> {
  dateStyle?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: () => void;
  min?: string;
  max?: string;
}

function Date({
  dateStyle,
  disabled,
  placeholder,
  className,
  onChange,
  min,
  max,
}: DateProps) {
  const onFocus = (e: any) => {
    e.target.type = "date";
  };

  const onBlur = (e: any) => {
    e.target.type = e.target.value === "" ? "text" : "date";
  };

  return (
    <input
      id="dateInput"
      type="text"
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      className={`date ${dateStyle} ${className}`}
      placeholder={placeholder}
      disabled={disabled}
      min={min}
      max={max}
    />
  );
}

export default Date;
