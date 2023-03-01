/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import "./styles.scss";

export interface IOption {
  key: number;
  value: string;
  displayName: string;
  selected: boolean;
}
interface IDropdown extends React.HTMLProps<HTMLSelectElement> {
  name: string;
  options: IOption[];
  placeholder?: string;
  onChange?: (e: any) => void;
  setValue: (v: string) => void;
  dropdownStyle?: string;
}

const Dropdown = (props: IDropdown) => {
  const {
    name,
    options = [],
    placeholder,
    onChange,
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
    <option key={option.key} value={option.value}>
      {option.displayName}
    </option>
  ));

  const placeholderOption = (
    <option disabled value="" hidden>
      {placeholder}
    </option>
  );

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    setCurrentOption(event.target.value);
    onChange({
      target: {
        placeholder,
        value: event.target.value.trim(),
      },
    });
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
