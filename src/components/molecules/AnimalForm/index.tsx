import React from "react";
import RenderType from "./helper/elementRenderer";
import { RescueObservable } from "../../../observables/rescue.observable";
import { useObservable } from "../../../hooks/use-observable.hook";
import "./styles.scss";

interface FormProps {
  fields: any[];
  types: any[];
  section: string;
}

export default function FormPage({ fields, types, section }: FormProps) {
  const [rescue] = useObservable(RescueObservable.rescue$);

  const handleChange = (event) => {
    const { placeholder, value } = event.target;

    let update = rescue;

    update = JSON.parse(update);
    update[placeholder] = value;
    update = JSON.stringify(update);

    RescueObservable.setRescue(update);
  };

  return (
    <div className="form-column">
      {types.map((data, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="form-row">
          {RenderType(fields, section, data, handleChange)}
        </div>
      ))}
    </div>
  );
}
