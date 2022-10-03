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
  options: IOption[];
  placeholder?: string;
  setValue: (v: string) => void;
  dropdownStyle?: string;
}

const Dropdown = (props: IDropdown) => {
  const {
    name,
    options = [],
    placeholder,
    setValue = () => {},
    dropdownStyle = "",
  } = props;
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
    <select
      {...selectProps}
      className={dropdownStyle}
      id={name}
      onChange={handleOnChange}
      value={currentOption}
    >
      {placeholder && placeholderOption}
      {displayOptions}
    </select>
  );
};

export default Dropdown;
