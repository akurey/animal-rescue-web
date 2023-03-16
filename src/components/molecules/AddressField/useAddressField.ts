import { TFunction } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  NEW_ANIMAL_CANTON,
  NEW_ANIMAL_DISTRICT,
  NEW_ANIMAL_EXACT_DIRECTION,
  NEW_ANIMAL_PAGE,
  NEW_ANIMAL_PROVINCE,
} from "../../../constants/translations";
import { ICanton, IProvince } from "../../../types/address.types";
import { IOption } from "../../atoms/Dropdown";

interface Hook {
  provinceLabel: string;
  cantonLabel: string;
  districtLabel: string;
  exactDirectionLabel: string;
  t: TFunction;
  provinceOptions: IOption[];
  cantonOptions: IOption[];
  districtOptions: IOption[];
  setIdProvinceSelected: any;
  setIdCantonSelected: any;
}

export default function useAddressField({
  provinceValue,
  cantonValue,
  addressOptions,
}): Hook {
  const { t } = useTranslation(NEW_ANIMAL_PAGE);
  const provinceLabel = NEW_ANIMAL_PROVINCE;
  const cantonLabel = NEW_ANIMAL_CANTON;
  const districtLabel = NEW_ANIMAL_DISTRICT;
  const exactDirectionLabel = NEW_ANIMAL_EXACT_DIRECTION;
  const [provinceOptions, setProvinceOptions]: IOption[] | any = useState([]);
  const [cantonOptions, setCantonOptions]: IOption[] | any = useState([]);
  const [districtOptions, setDistrictOptions]: IOption[] | any = useState([]);
  const [idProvinceSelected, setIdProvinceSelected]: number | any =
    useState(provinceValue);
  const [idCantonSelected, setIdCantonSelected]: number | any =
    useState(cantonValue);

  const buildProvinceOptions = (provinces: IProvince[]) => {
    const provinceOptionsList: IOption[] = provinces.map((x, index) => {
      return {
        key: index,
        value: x.Province,
        selected: false,
        displayName: x.Province,
      };
    });

    return provinceOptionsList;
  };

  const buildCantonOptions = () => {
    if (idProvinceSelected && addressOptions) {
      const provinceSelected: IProvince = addressOptions.find(
        (x: IProvince) => x.Province === idProvinceSelected.trim()
      );
      const cantonOptionList: IOption[] = provinceSelected.Cantons.map(
        (canton, index) => {
          return {
            key: index,
            value: canton.Canton,
            selected: false,
            displayName: canton.Canton,
          };
        }
      );
      setCantonOptions(cantonOptionList);
    }
  };

  const buildDistrictOptions = () => {
    if (idCantonSelected && addressOptions) {
      const provinceSelected: IProvince = addressOptions.find(
        (x: IProvince) => x.Province === idProvinceSelected.trim()
      );
      const cantonSelected: ICanton = provinceSelected.Cantons.find(
        (x: ICanton) => x.Canton === idCantonSelected.trim()
      );
      const districtOptionList: IOption[] = cantonSelected.Districts.map(
        (district) => {
          return {
            key: district.Id,
            value: district.District,
            selected: false,
            displayName: district.District,
          };
        }
      );
      setDistrictOptions(districtOptionList);
    }
  };

  useEffect(() => {
    if (addressOptions) {
      setProvinceOptions(buildProvinceOptions(addressOptions));
    }
  }, []);

  useEffect(() => {
    buildCantonOptions();
  }, [idProvinceSelected]);

  useEffect(() => {
    buildDistrictOptions();
  }, [idCantonSelected]);

  return {
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
  };
}
