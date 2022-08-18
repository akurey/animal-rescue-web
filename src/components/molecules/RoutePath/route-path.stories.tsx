import React from "react";
import { MemoryRouter } from "react-router-dom";
import RoutePathComponent from ".";

export default {
  title: "V1/Atoms/RoutePathComponent",
  component: RoutePathComponent,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function Default() {
  return <RoutePathComponent />;
}

export { Default };
