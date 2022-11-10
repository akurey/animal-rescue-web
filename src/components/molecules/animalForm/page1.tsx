import React, { useEffect, useState } from "react";
import { RescueObservable } from "../../../observables/rescue.observable";
import RenderForm from "./helper/renderForm";
import "./styles.scss";

export default function AnimalForm1({ fields, types }) {
  const [rescueData, setRescueData] = useState([]);

  const section = "Datos del animal";

  useEffect(() => {
    const baseData = JSON.parse(createBasicData());
    setRescueData(baseData);
  }, []);

  const handleChange = (event) => {
    const { placeholder, value } = event.target;
    let update = rescueData;

    update[placeholder] = value;

    setRescueData(update);
    RescueObservable.setRescue(rescueData);
  };

  // create a JSON object with all the fields avaiable as keys
  function createBasicData() {
    let inputData = "{";
    for (let index = 0; index < fields.length; index++) {
      inputData += '"' + fields[index].FieldName + '": "", ';
    }
    inputData = inputData.slice(0, -2);
    inputData += "}";
    return inputData;
  }

  return (
    <>
      <h2>Información básica</h2>
      <div className="form-column">
        {types.map((data) => (
          <div className="form-row">
            {RenderForm(fields, section, data, handleChange)}
          </div>
        ))}
      </div>
    </>
  );
}
