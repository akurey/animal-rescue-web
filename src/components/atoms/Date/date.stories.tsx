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
  return <DateComponent placeholder="2022-01-01" dateStyle="date--primary" />;
}

function Disabled() {
  return (
    <DateComponent
      placeholder="2022-01-01"
      dateStyle="date--primary"
      disabled
    />
  );
}

function Error() {
  return <DateComponent placeholder="2022-01-01" dateStyle="date--error" />;
}

function Placeholder() {
  return <DateComponent dateStyle="date--primary" placeholder="Fecha" />;
}

export { Default, Disabled, Error, Placeholder };
