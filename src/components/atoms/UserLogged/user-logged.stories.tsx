import React from "react";
import { MemoryRouter } from "react-router-dom";
import UserLoggedComponent from ".";

export default {
  title: "V1/Atoms/UserLoggedComponent",
  component: UserLoggedComponent,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function Default() {
  return <UserLoggedComponent name="Name" lastname="Lastname"/>;
}

function Photo() {
  return <UserLoggedComponent name="Name" lastname="Lastname" photo="/user.png"/>;
}



export { Default, Photo };
