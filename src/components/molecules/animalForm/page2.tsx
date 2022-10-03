import React from "react";
import DateComponent from "../../atoms/Date";
import Dropdown from "../../atoms/Dropdown";
import TextArea from "../../atoms/TextArea";
import "./styles.scss";

export default function AnimalForm2() {
  //  TODO: update real data
  const commonNameOptions = [
    { value: "Perezoso-1", displayName: "Perezoso de 3 dedos", selected: true },
    { value: "Perezoso-2", displayName: "Perezoso 2", selected: false },
    { value: "Perezoso-3", displayName: "Perezoso 3", selected: false },
  ];

  return (
    <div>
      <h2>Información de rescate</h2>
      <div className="form-row">
        <div className="form-column">
          <div className="form-row">
            <Dropdown
              name="province"
              placeholder="Provincia"
              options={commonNameOptions}
              dropdownStyle="form-field--dropdown"
              setValue={() => {}}
            />
            <Dropdown
              name="canton"
              placeholder="Cantón"
              options={commonNameOptions}
              dropdownStyle="form-field--dropdown"
              setValue={() => {}}
            />
          </div>
          <TextArea
            textAreaStyle="form-field--textarea"
            placeholder="Lugar exacto de rescate"
            value=""
          />
        </div>
        <div className="form-column">
          <div className="form-row">
            <Dropdown
              name="district"
              options={commonNameOptions}
              dropdownStyle="form-field--dropdown"
              placeholder="Distrito"
              setValue={() => {}}
            />
            <DateComponent
              className="form-field--date"
              placeholder="Fecha de rescate"
            />
          </div>
          <TextArea
            textAreaStyle="form-field--textarea"
            placeholder="Descripción del rescate"
            value=""
          />
        </div>
      </div>
    </div>
  );
}
