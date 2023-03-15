/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import "./styles.scss";

export interface IOption {
  key: number;
  value: string;
  displayName: string;
  selected: boolean;
}
export interface IDropdown extends React.HTMLProps<HTMLSelectElement> {
  name: string;
  options: IOption[];
  placeholder?: string;
  onChange?: (e: any) => void;
  setValue: (v: string) => void;
  dropdownStyle?: string;
  value?: string;
}

const Dropdown = (props: IDropdown) => {
  const {
    name,
    options = [],
    placeholder,
    onChange,
    setValue = () => {},
    dropdownStyle = "",
    value = "",
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
    <option key={option.key} value={option.value.trim()}>
      {option.displayName.trim()}
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

  useEffect(() => {
    if (value) {
      setValue(`${value}`);
      setCurrentOption(`${value}`);
    }
  }, []);

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
