import React from "react";
import { MemoryRouter } from "react-router-dom";
import PageNumberComponent from ".";

export default {
  title: "V1/Atoms/PageNumberComponent",
  component: PageNumberComponent,
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
  return <PageNumberComponent />;
}

function Pages() {
  return <PageNumberComponent pages={5} currentPage={1} />;
}

export { Default, Pages };
