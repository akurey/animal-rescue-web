import React from "react";
import { MemoryRouter } from "react-router-dom";
import NumericComponent from ".";

export default {
  title: "V1/Atoms/NumericComponent",
  component: NumericComponent,
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
  return <NumericComponent placeholder="Primary" value={0} />;
}

function FloatingPoint() {
  return (
    <NumericComponent placeholder="Floating point step" value={0} step={0.1} />
  );
}

function Error() {
  return (
    <NumericComponent
      numericStyle="input--error"
      placeholder="Error"
      value={0}
    />
  );
}

function Disabled() {
  return (
    <NumericComponent
      onClick={() => {}}
      numericStyle="input--primary"
      placeholder="Disable"
      value={0}
      disabled
    />
  );
}

export { Default, FloatingPoint, Error, Disabled };
