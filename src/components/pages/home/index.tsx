import React from "react";
import validator from "validator";
import TextBox from "../../atoms/text-box";
import "./home.scss";

function Home() {
  return (
    <TextBox
      placeholder="test"
      validators={[
        {
          validator: (val: string) => !validator.isEmpty(val),
          message: "Vacio",
        },
        {
          validator: (value: string) => validator.isLength(value, { min: 3 }),
          message: "chiquito",
        },
      ]}
    />
  );
}

export default Home;
