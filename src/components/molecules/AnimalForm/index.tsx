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
      <TextBox
        textBoxStyle="form-textbox"
        description="Nombre del animal"
        placeholder="Pedro el perezoso"
      />
      <Dropdown
        name="common-name"
        label="Nombre común"
        options={commonNameOptions}
        placeholder={
          commonNameOptions.find((option) => option.selected === true)
            .displayName
        }
        setValue={() => {}}
      />
      <TextBox
        textBoxStyle="form-textbox"
        description="Nombre científico"
        placeholder="Melursus ursinus"
      />
      <TextBox
        textBoxStyle="form-textbox"
        description="Clasificación"
        placeholder="Mammalia"
      />
      <TextBox
        textBoxStyle="form-textbox"
        description="Estatus"
        placeholder="Sin preocupación"
      />
      <Numeric
        numericStyle="form-numeric"
        description="Peso"
        value={0.0}
        placeholder="0.00"
        step={0.5}
      />
      <Numeric
        numericStyle="form-numeric"
        description="Altura"
        value={0.0}
        placeholder="0.00"
        step={0.5}
      />
      <Numeric
        numericStyle="form-numeric"
        description="Edad (aproximado)"
        value={0.0}
        placeholder="0.00"
        step={0.5}
      />
      <TextArea
        description="Breve descripción de condición de ingreso"
        value=""
        placeholder="Descripción del rescate..."
      />
    </div>
  );
}

export function AnimalForm2() {
  //  TODO: update real data
  const commonNameOptions = [
    { value: "Perezoso-1", displayName: "Perezoso de 3 dedos", selected: true },
    { value: "Perezoso-2", displayName: "Perezoso 2", selected: false },
    { value: "Perezoso-3", displayName: "Perezoso 3", selected: false },
  ];

  return (
    <div>
      <h2>Información de rescate</h2>
      <Dropdown
        name="province"
        label="Provincia"
        options={commonNameOptions}
        placeholder={
          commonNameOptions.find((option) => option.selected === true)
            .displayName
        }
        setValue={() => {}}
      />
      <Dropdown
        name="canton"
        label="Cantón"
        options={commonNameOptions}
        placeholder={
          commonNameOptions.find((option) => option.selected === true)
            .displayName
        }
        setValue={() => {}}
      />
      <Dropdown
        name="district"
        label="Distrito"
        options={commonNameOptions}
        placeholder={
          commonNameOptions.find((option) => option.selected === true)
            .displayName
        }
        setValue={() => {}}
      />
      {/* <Date /> */}
      <TextArea
        description="Lugar exacto de rescate"
        value=""
        placeholder="Dirección en señas, si fue en carretera, una casa, barrio...."
      />
      <TextArea
        description="Descripción del rescate"
        value=""
        placeholder="Descripción del rescate..."
      />
    </div>
  );
}
