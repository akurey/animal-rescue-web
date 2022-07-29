import React from "react";
import { MemoryRouter } from "react-router-dom";
import Dropdown, { IOption } from ".";

export default {
  title: "V1/Atoms/DropdownComponent",
  component: Dropdown,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    onClick: () => {},
    buttonStyle: "input--primary",
    disabled: false,
  },
};

const options = [
  { value: "option1", displayName: "Option 1" },
  { value: "option2", displayName: "Option 2" },
  { value: "option3", displayName: "Option 3" },
  { value: "option4", displayName: "Perezoso de 3 dedos" },
] as IOption[];

let defaultValue = "";
let placeholderValue = "";

function Default() {
  return (
    <Dropdown
      setValue={(v) => {
        defaultValue = v;
      }}
      options={options}
      label="Select an option:"
      name="select"
      value={defaultValue}
    />
  );
}

function PlaceHolder() {
  return (
    <Dropdown
      setValue={(v) => {
        placeholderValue = v;
      }}
      placeholder="--select"
      options={options}
      label="Select an option:"
      name="select"
      value={placeholderValue}
    />
  );
}

function Disabled() {
  return (
    <Dropdown
      setValue={alert}
      options={options}
      label="Select an option:"
      name="select"
      value=""
      disabled
    />
  );
}

export { Default, PlaceHolder, Disabled };
