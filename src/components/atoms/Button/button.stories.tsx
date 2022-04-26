import React from "react";
import { MemoryRouter } from "react-router-dom";
import ButtonComponent from ".";

export default {
  title: "V1/Atoms/ButtonComponent",
  component: ButtonComponent,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    onClick: () => {},
    buttonStyle: "btn--danger",
    buttonSize: "btn--medium",
    disabled: false,
  },
};

function Default() {
  return <ButtonComponent onClick={() => {}}>button text</ButtonComponent>;
}

function Disabled() {
  return (
    <ButtonComponent
      onClick={() => {}}
      buttonStyle="btn--secundary"
      buttonSize="btn--small"
      disabled
    >
      Disabled
    </ButtonComponent>
  );
}

function Warning() {
  return (
    <ButtonComponent
      onClick={() => {}}
      buttonStyle="btn--warning"
      buttonSize="btn--small"
    >
      warning
    </ButtonComponent>
  );
}

function Link() {
  return (
    <ButtonComponent
      onClick={() => {}}
      buttonStyle="btn--link"
      buttonSize="btn--small"
    >
      link
    </ButtonComponent>
  );
}

export { Default, Disabled, Warning, Link };
