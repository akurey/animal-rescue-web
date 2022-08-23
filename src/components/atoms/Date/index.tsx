import React, { useState } from "react";
import "./styles.scss";

interface DateProps extends React.HTMLAttributes<HTMLInputElement> {
  dateStyle?: string;
  disabled?: boolean;
  description?: string;
  dateValue?: string;
  className?: string;
  min?: string;
  max?: string;
}

function Date({
  dateStyle,
  disabled,
  dateValue,
  description,
  className,
  min,
  max,
}: DateProps) {
  const [currentDate, setCurrentDate] = useState(dateValue);

  const onChangeInput = (e: any) => {
    setCurrentDate(e.target.value);
  };

  return (
    <div className="form-date">
      <label htmlFor="dateInput" className="date--label">
        {description}
      </label>
      <input
        id="dateInput"
        type="date"
        className={`
          input
          ${dateStyle}
          ${className}
        `}
        disabled={disabled}
        onChange={onChangeInput}
        value={currentDate}
        min={min}
        max={max}
      />
    </div>
  );
}

export default Date;
