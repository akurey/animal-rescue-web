import React, { useEffect, useState } from "react";
import RenderForm from "./helper/renderForm";
import "./styles.scss";

export default function AnimalForm1({ fields, types }) {
  const section = "Datos del rescate";

  return (
    <>
      <h2>Información básica</h2>
      <div className="form-column">
        {types.map((data) => (
          <div className="form-row">{RenderForm(fields, section, data)}</div>
        ))}
      </div>
    </>
  );
}
