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
  return <DateComponent dateValue="2022-01-01" dateStyle="date--primary" />;
}

function Secondary() {
  return <DateComponent dateValue="2022-01-01" dateStyle="date--secondary" />;
}

function DateRange() {
  return (
    <DateComponent placeholder="Primary" dateStyle="date--primary" min="2022-08-08" max="2022-08-09" />
  );
}

function Error() {
  return <DateComponent dateValue="2022-01-01" dateStyle="date--error" />;
}

export { Default, Secondary, DateRange, Error };
