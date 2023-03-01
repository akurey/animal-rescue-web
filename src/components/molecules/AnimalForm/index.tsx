import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import RenderType from "./helper/elementRenderer";
import { RescueObservable } from "../../../observables/rescue.observable";
import "./styles.scss";

interface AnimalDataType {
  Name: string;
  ScientificName: string;
  id: Number;
}

interface FormProps {
  setAnimalToSend?: React.Dispatch<React.SetStateAction<any>>;
  animalData?: any[];
  fields: any[];
  types: any[];
  section: string;
  setFormData?: any;
  formData?: any;
  animalToSend?: AnimalDataType;
}

export default function FormPage({
  setAnimalToSend,
  animalData,
  fields,
  types,
  section,
  formData,
  setFormData,
  animalToSend,
}: FormProps) {
  const handleChange = (event) => {
    const { placeholder, value } = event.target;
    const newObj = {};
    newObj[placeholder] = value;
    const newFormData = formData.map((element) => {
      if (element.section === section) {
        const newFormElement = { ...element, ...newObj };
        return newFormElement;
      }
      return element;
    });

    setFormData(newFormData);
    let jsonFormData = {};

    newFormData.forEach((element) => {
      jsonFormData = { ...element, ...jsonFormData };
    });

    RescueObservable.setRescue(JSON.stringify(jsonFormData));
  };

  const defaultProps = {
    options: animalData,
    getOptionLabel: (option: AnimalDataType) =>
      `${option.Name} (${option.ScientificName})`,
  };

  return (
    <div className="form-column">
      {animalData && (
        <Autocomplete
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...defaultProps}
          autoHighlight
          freeSolo
          disableClearable
          value={animalToSend}
          onChange={(event: any, newValue: AnimalDataType | null) => {
            setAnimalToSend(newValue);
          }}
          fullWidth
          includeInputInList
          renderInput={(params) => (
            <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              className="autoComplete"
              label="Nombre Común (Especie)"
              variant="standard"
            />
          )}
        />
      )}
      {types.map((data, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="form-row">
          {RenderType(
            fields,
            section,
            data,
            handleChange,
            formData.find((element) => element.section === section)
          )}
        </div>
      ))}
    </div>
  );
}
