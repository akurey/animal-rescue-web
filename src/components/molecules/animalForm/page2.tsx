import React, { useEffect, useState } from "react";
import { useObservable } from "../../../hooks/use-observable.hook";
import { RescueObservable } from "../../../observables/rescue.observable";
import RenderForm from "./helper/renderForm";
import "./styles.scss";

export default function AnimalForm1({ fields, types }) {
  const [rescue] = useObservable(RescueObservable.rescue$);
  const [rescueData, setRescueData] = useState([]);
  const section = "Datos del rescate";

  const handleChange = (event) => {
    const { placeholder, value } = event.target;
    let update = rescue;

    update[placeholder] = value;

    setRescueData(update);
    RescueObservable.setRescue(rescueData);
  };

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
