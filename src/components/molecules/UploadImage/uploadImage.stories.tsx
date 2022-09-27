import React from "react";
import { MemoryRouter } from "react-router-dom";
import UploadImage from ".";

export default {
  title: "V1/Molecules/UploadImage",
  component: UploadImage,
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
  return <UploadImage description="Upload rescue photo">Upload</UploadImage>;
}

export { Default };
