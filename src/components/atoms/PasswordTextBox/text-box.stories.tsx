import React from "react";
import { MemoryRouter } from "react-router-dom";
import PasswordTextBoxComponent from ".";

export default {
  title: "V1/Atoms/PasswordTextBoxComponent",
  component: PasswordTextBoxComponent,
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
  return <PasswordTextBoxComponent placeholder="Primary" value="" />;
}

function Secondary() {
  return (
    <PasswordTextBoxComponent
      textBoxStyle="input--secondary"
      placeholder="Secundary"
      value=""
    />
  );
}

function Error() {
  return (
    <PasswordTextBoxComponent
      textBoxStyle="input--error"
      placeholder="Error"
      value=""
    />
  );
}

function Disabled() {
  return (
    <PasswordTextBoxComponent
      onClick={() => {}}
      textBoxStyle="input--primary"
      placeholder="Disable"
      value=""
      disabled
    />
  );
}

export { Default, Secondary, Error, Disabled };
