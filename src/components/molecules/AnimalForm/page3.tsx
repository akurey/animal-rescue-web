import React from "react";
import TextBox from "../../atoms/TextBox";
import "./styles.scss";

export default function AnimalForm3() {
  return (
    <div className="form-column">
      <div className="form-row">
        <TextBox placeholder="Nombre" />
        <TextBox placeholder="Apellidos" />
      </div>
      <div className="form-row">
        <TextBox placeholder="Cédula" />
        <TextBox placeholder="Teléfono" />
      </div>
      <TextBox placeholder="Motivo de entrega" />
      <TextBox placeholder="Observaciones" />
    </div>
  );
}
