import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import RenderType from "./helper/elementRenderer";
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
    const newFormData = formData.map((element) => {
      // eslint-disable-next-line
      if (element.section === section) {
        // eslint-disable-next-line
        element[placeholder].value = value;
        // eslint-disable-next-line
        element[placeholder].valid = value ? true : false;
      }
      return element;
    });
    setFormData(newFormData);
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
