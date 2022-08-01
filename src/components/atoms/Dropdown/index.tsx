/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import "./styles.scss";

export interface IOption {
  value: string;
  displayName: string;
  selected: boolean;
}
interface IDropdown extends React.HTMLProps<HTMLSelectElement> {
  name: string;
  label: string;
  options: IOption[];
  placeholder?: string;
  setValue: (v: string) => void;
}

const Dropdown = (props: IDropdown) => {
  const { label, name, options = [], placeholder, setValue = () => {} } = props;
  const [currentOption, setCurrentOption] = useState("");

  const selectProps: React.HTMLProps<HTMLSelectElement> = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        !(
          key.includes("label") ||
          key.includes("options") ||
          key.includes("placeholder") ||
          key.includes("setValue")
        )
    )
  );

  const displayOptions = options.map((option) => (
    <option value={option.value}>{option.displayName}</option>
  ));

  const placeholderOption = (
    <option disabled selected value="" hidden>
      {placeholder}
    </option>
  );

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    setCurrentOption(event.target.value);
  };
  return (
    <span className="select">
      <label htmlFor={name}>{label}</label>
      <select
        {...selectProps}
        id={name}
        onChange={handleOnChange}
        value={currentOption}
      >
        {placeholder && placeholderOption}
        {displayOptions}
      </select>
    </span>
  );
};
export default Dropdown;
