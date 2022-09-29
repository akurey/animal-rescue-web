import React from "react";
import { MemoryRouter } from "react-router-dom";
import BreadcrumbsComponent from ".";

export default {
  title: "V1/Atoms/BreadcrumbsComponent",
  component: BreadcrumbsComponent,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function Default() {
  return <BreadcrumbsComponent />;
}

export { Default };
