import React from "react";
import { MemoryRouter } from "react-router-dom";
import DateComponent from ".";

export default {
  title: "V1/Atoms/DateComponent",
  component: DateComponent,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function Default() {
  return <DateComponent dateValue="2022-01-01" />;
}

function DateRange() {
  return <DateComponent placeholder="Primary" min="2022-08-08" max="2022-08-09"/>;
}

export { Default, DateRange };
