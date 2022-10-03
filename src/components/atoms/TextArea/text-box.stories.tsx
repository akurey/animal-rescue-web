import React from "react";
import { MemoryRouter } from "react-router-dom";
import TextAreaComponent from ".";

export default {
  title: "V1/Atoms/TextAreaComponent",
  component: TextAreaComponent,
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

function Default() {
  return (
    <TextAreaComponent
      placeholder="Primary"
      value=""
      description="Text Area Input"
    />
  );
}

function Error() {
  return (
    <TextAreaComponent
      textAreaStyle="textarea--error"
      placeholder="Error"
      value=""
    />
  );
}

function Disabled() {
  return (
    <TextAreaComponent
      textAreaStyle="textarea--primary"
      placeholder="Disable"
      value=""
      disabled
    />
  );
}

export { Default, Error, Disabled };
