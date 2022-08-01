import React from "react";
import { MemoryRouter } from "react-router-dom";
import TextBoxComponent from ".";

export default {
  title: "V1/Atoms/TextBoxComponent",
  component: TextBoxComponent,
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
  return <TextBoxComponent placeholder="Primary" value="" />;
}

function Secundary() {
  return (
    <TextBoxComponent
      textBoxStyle="input--secundary"
      placeholder="Secundary"
      value=""
    />
  );
}

function Error() {
  return (
    <TextBoxComponent
      textBoxStyle="input--error"
      placeholder="Error"
      value=""
    />
  );
}

function Disabled() {
  return (
    <TextBoxComponent
      onClick={() => {}}
      textBoxStyle="input--primary"
      placeholder="Disable"
      value=""
      disabled
    />
  );
}

export { Default, Secundary, Error, Disabled };
