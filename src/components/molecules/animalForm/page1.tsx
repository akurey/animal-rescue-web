import React from "react";
import Dropdown from "../../atoms/Dropdown";
import Numeric from "../../atoms/Numeric";
import TextArea from "../../atoms/TextArea";
import TextBox from "../../atoms/TextBox";
import "./styles.scss";

export default function AnimalForm1() {
  //  TODO: update real data
  const commonNameOptions = [
    { value: "Perezoso-1", displayName: "Perezoso de 3 dedos", selected: true },
    { value: "Perezoso-2", displayName: "Perezoso 2", selected: false },
    { value: "Perezoso-3", displayName: "Perezoso 3", selected: false },
  ];

  return (
    <div>
      <h2>Información básica</h2>
      <div className="form-column">
        <div className="form-row">
          <TextBox
            textBoxStyle="form-field--textbox"
            placeholder="Nombre del animal"
          />
          <Dropdown
            name="common-name"
            placeholder="Nombre común"
            options={commonNameOptions}
            dropdownStyle="form-field--dropdown"
            setValue={() => {}}
          />
        </div>
        <div className="form-row">
          <TextBox
            textBoxStyle="form-field--textbox"
            placeholder="Nombre científico"
          />
          <TextBox
            textBoxStyle="form-field--textbox"
            placeholder="Clasificación"
          />
          <TextBox textBoxStyle="form-field--textbox" placeholder="Estatus" />
        </div>
        <div className="form-row">
          <Numeric
            numericStyle="form-field--numeric"
            placeholder="Peso"
            step={0.5}
            units="g"
          />
          <Numeric
            numericStyle="form-field--numeric"
            placeholder="Altura"
            step={0.5}
            units="cm"
          />
          <Numeric
            numericStyle="form-field--numeric"
            placeholder="Edad (aproximado)"
            step={0.5}
            units="meses"
          />
        </div>
        <div className="form-row">
          <TextArea
            textAreaStyle="form-field--textarea"
            placeholder="Breve descripción de condición de ingreso"
            value=""
          />
        </div>
      </div>
    </div>
  );
}
