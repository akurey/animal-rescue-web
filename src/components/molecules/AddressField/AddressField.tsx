import React from "react";
import { IProvince } from "../../../types/address.types";
import { Dropdown, TextBox } from "../../atoms";
import "./styles.scss";
import useAddressField from "./useAddressField";

export interface Props {
  id: string;
  provinceValue: string;
  cantonValue: string;
  districtValue: string;
  exactDirectionValue: string;
  addressOptions: IProvince[];
  onChange?: (e: any) => void;
}

const AddressField = (props: Props) => {
  const {
    id,
    onChange,
    provinceValue,
    cantonValue,
    districtValue,
    exactDirectionValue,
    addressOptions,
  } = props;
  const {
    provinceLabel,
    cantonLabel,
    districtLabel,
    exactDirectionLabel,
    t,
    provinceOptions,
    cantonOptions,
    districtOptions,
    setIdProvinceSelected,
    setIdCantonSelected,
  } = useAddressField({
    provinceValue,
    cantonValue,
    addressOptions,
  });

  return (
    <div className="address-container">
      <div className="address-field">
        <Dropdown
          onChange={onChange}
          setValue={(event) => {
            setIdProvinceSelected(event);
          }}
          value={provinceValue || ""}
          name={t(provinceLabel)}
          key={`${id}-${provinceLabel}`}
          placeholder={t(provinceLabel)}
          options={provinceOptions}
        />

        <Dropdown
          setValue={(event) => {
            setIdCantonSelected(event);
          }}
          value={cantonValue || ""}
          onChange={onChange}
          name={t(cantonLabel)}
          key={`${id}-${cantonLabel}`}
          placeholder={t(cantonLabel)}
          options={cantonOptions}
        />

        <Dropdown
          setValue={() => {}}
          value={districtValue || ""}
          onChange={onChange}
          name={t(districtLabel)}
          key={`${id}-${districtLabel}`}
          placeholder={t(districtLabel)}
          options={districtOptions}
        />
      </div>
      <div>
        <TextBox
          onChange={onChange}
          value={exactDirectionValue || ""}
          key={`${id}-${exactDirectionLabel}`}
          placeholder={t(exactDirectionLabel)}
          description={id}
        />
      </div>
    </div>
  );
};

export default AddressField;
