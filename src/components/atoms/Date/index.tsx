import React, { useState } from "react";
import "./styles.scss";

interface DateProps extends React.HTMLAttributes<HTMLInputElement> {
  dateStyle?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onClick?: () => void;
  validators?: any[];
  description?: string;
  dateValue?: string;
  className?: string;
	min?: string;
	max?: string;
}

function Date({
  onClick,
  dateStyle,
  disabled,
  dateValue,
  onChange,
  description,
  className,
	min,
	max
}: DateProps) {
  const [currentDate, setCurrentDate] = useState(dateValue);

  const onChangeInput = (e: any) => {
    setCurrentDate(e.target.value);
  };

  return (
    <>
      <label htmlFor="dateInput" className="input--label">
        {description}
      </label>
      <input
        id="dateInput"
        type="date"
        onClick={onClick}
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
    </>
  );
}

export default Date;
