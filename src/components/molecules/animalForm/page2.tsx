import React from "react";
import Dropdown from "../../atoms/Dropdown";
import TextBox from "../../atoms/TextBox";
import "./styles.scss";

export default function AnimalForm2() {
  //  TODO: update real data
  const reasonOptions = [
    { value: "reason-1", displayName: "Razón 1", selected: true },
    { value: "reason-2", displayName: "Razón 2", selected: false },
    { value: "reason-3", displayName: "Razón 3", selected: false },
  ];

  return (
    <div className="form-column">
      <Dropdown
        name="reason"
        placeholder="Razón de recepción"
        options={reasonOptions}
        dropdownStyle="form-field--dropdown"
        setValue={() => {}}
      />
      <div className="form-row">
        <Dropdown
          name="case_type"
          placeholder="Tipo de caso"
          options={reasonOptions}
          dropdownStyle="form-field--dropdown"
          setValue={() => {}}
        />
        <Dropdown
          name="UICN_category"
          placeholder="Categoría UICN"
          options={reasonOptions}
          dropdownStyle="form-field--dropdown"
          setValue={() => {}}
        />
      </div>
      <div className="form-row">
        <Dropdown
          name="province"
          placeholder="Provincia"
          options={reasonOptions}
          dropdownStyle="form-field--dropdown"
          setValue={() => {}}
        />
        <Dropdown
          name="canton"
          placeholder="Cantón"
          options={reasonOptions}
          dropdownStyle="form-field--dropdown"
          setValue={() => {}}
        />
        <Dropdown
          name="district"
          placeholder="Distrito"
          options={reasonOptions}
          dropdownStyle="form-field--dropdown"
          setValue={() => {}}
        />
      </div>
      <TextBox placeholder="Dirección exacta" />
      <TextBox placeholder="Observaciones" />
    </div>
  );
}
