import React from "react";
import RenderType from "./helper/elementRenderer";
import "./styles.scss";

interface FormProps {
  fields: any[];
  types: any[];
  section: string;
}

export default function FormPage({ fields, types, section }: FormProps) {
  return (
    <div className="form-column">
      {types.map((data) => (
        <div className="form-row">{RenderType(fields, section, data)}</div>
      ))}
    </div>
  );
}
