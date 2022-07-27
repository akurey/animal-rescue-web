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
  return <TextAreaComponent placeholder="Primary" value="" />;
}

function Secundary() {
  return (
    <TextAreaComponent
      textAreaStyle="input--secundary"
      placeholder="Secundary"
      value=""
    />
  );
}

function Error() {
  return (
    <TextAreaComponent
      textAreaStyle="input--error"
      placeholder="Error"
      value=""
    />
  );
}

function Disabled() {
  return (
    <TextAreaComponent
      onClick={() => {}}
      textAreaStyle="input--primary"
      placeholder="Disable"
      value=""
      disabled
    />
  );
}

export { Default, Secundary, Error, Disabled };
