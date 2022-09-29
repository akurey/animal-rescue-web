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
              label="Provincia"
              options={commonNameOptions}
              dropdownStyle="form-field--dropdown"
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
              dropdownStyle="form-field--dropdown"
              placeholder={
                commonNameOptions.find((option) => option.selected === true)
                  .displayName
              }
              setValue={() => {}}
            />
          </div>
          <TextArea
            textAreaStyle="form-field--textarea"
            description="Lugar exacto de rescate"
            value=""
            placeholder="Dirección en señas, si fue en carretera, una casa, barrio...."
          />
        </div>
        <div className="form-column">
          <div className="form-row">
            <Dropdown
              name="district"
              label="Distrito"
              options={commonNameOptions}
              dropdownStyle="form-field--dropdown"
              placeholder={
                commonNameOptions.find((option) => option.selected === true)
                  .displayName
              }
              setValue={() => {}}
            />
            <DateComponent
              dateStyle="form-field--date"
              description="Fecha de rescate"
            />
          </div>
          <TextArea
            textAreaStyle="form-field--textarea"
            description="Descripción del rescate"
            value=""
            placeholder="Descripción del rescate..."
          />
        </div>
      </div>
    </div>
  );
}
