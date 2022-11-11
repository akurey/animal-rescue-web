import React from "react";
import Dropdown from "../../atoms/Dropdown";
import TextBox from "../../atoms/TextBox";
import "./styles.scss";

export default function AnimalForm1() {
  //  TODO: update real data
  const sexOptions = [
    { id: 0, displayName: "Macho", value: "Macho", selected: true },
    { id: 1, displayName: "Hembra", value: "Hembra", selected: false },
  ];

  //  TODO: update real data
  const colorOptions = [
    { id: 0, displayName: "Café", value: "Café", selected: true },
    { id: 1, displayName: "Negro", value: "Negro", selected: false },
    { id: 2, displayName: "Rojo", value: "Rojo", selected: false },
    { id: 3, displayName: "Amarillo", value: "Amarillo", selected: false },
    { id: 4, displayName: "Blanco", value: "Blanco", selected: false },
  ];

  return (
    <div className="form-column">
      <div className="form-row">
        <TextBox placeholder="Nombre común" />
        {/* TODO: make italic when selected */}
        <TextBox placeholder="Especie" />
      </div>
      <div className="form-row">
        <Dropdown
          name="sex"
          placeholder="Sexo"
          options={sexOptions}
          dropdownStyle="form-field--dropdown"
          setValue={() => {}}
        />
        <Dropdown
          name="color"
          placeholder="Color"
          options={colorOptions}
          dropdownStyle="form-field--dropdown"
          setValue={() => {}}
        />
      </div>
      <div className="form-row">
        <TextBox placeholder="Número de identificación (CHIP)" />
        <TextBox placeholder="Procedencia" />
      </div>
      <TextBox placeholder="Datos del padre" />
      <TextBox placeholder="Datos de la madre" />
    </div>
  );
}
