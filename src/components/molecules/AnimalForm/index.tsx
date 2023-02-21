import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import RenderType from "./helper/elementRenderer";
import { RescueObservable } from "../../../observables/rescue.observable";
import { useObservable } from "../../../hooks/use-observable.hook";
import "./styles.scss";

interface FormProps {
  setAnimalIdToSend?: React.Dispatch<React.SetStateAction<Number>>;
  animalData?: any[];
  fields: any[];
  types: any[];
  section: string;
}

export default function FormPage({
  setAnimalIdToSend,
  animalData,
  fields,
  types,
  section,
}: FormProps) {
  const [rescue] = useObservable(RescueObservable.rescue$);

  const handleChange = (event) => {
    const { placeholder, value } = event.target;

    let update = rescue;

    update = JSON.parse(update);
    update[placeholder] = value;
    update = JSON.stringify(update);

    RescueObservable.setRescue(update);
  };

  const defaultProps = {
    options: animalData,
    getOptionLabel: (option: AnimalDataType) =>
      `${option.Name} (${option.ScientificName})`,
  };

  interface AnimalDataType {
    Name: string;
    ScientificName: string;
    id: Number;
  }

  return (
    <div className="form-column">
      {animalData && (
        <Autocomplete
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...defaultProps}
          autoHighlight
          freeSolo
          disableClearable
          onChange={(event: any, newValue: AnimalDataType | null) => {
            setAnimalIdToSend(newValue.id);
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
          {RenderType(fields, section, data, handleChange)}
        </div>
      ))}
    </div>
  );
}
