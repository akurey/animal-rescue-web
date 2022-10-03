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
    disabled: false,
  },
};

function Default() {
  return <NumericComponent placeholder="Primary" />;
}

function FloatingPoint() {
  return <NumericComponent placeholder="Floating point step" step={0.1} />;
}

function Error() {
  return <NumericComponent numericStyle="numeric--error" placeholder="Error" />;
}

function Disabled() {
  return (
    <NumericComponent
      onClick={() => {}}
      numericStyle="numeric--primary"
      placeholder="Disable"
      disabled
    />
  );
}

export { Default, FloatingPoint, Error, Disabled };
