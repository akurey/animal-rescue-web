import { TFunction } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  CANTON_FIELD,
  EXACT_DIRECTION_FIELD,
  DISTRICT_FIELD,
  PROVINCE_FIELD,
  ADDRESS_FIELD_TYPE,
  DIRECTION_FIELD,
} from "../../../constants/fields.constant";
import { RESCUE_ROUTE } from "../../../constants/routes.types";
import {
  NEW_ANIMAL_FORM_FIRST,
  NEW_ANIMAL_FORM_SECOND,
  NEW_ANIMAL_FORM_THIRD,
  NEW_ANIMAL_PAGE,
} from "../../../constants/translations";
import { RescueObservable } from "../../../observables/rescue.observable";
import { addressAction } from "../../../reducers/address/actions";
import AddressService from "../../../services/address.service";
import FormService from "../../../services/form.services";
import RescueService from "../../../services/rescue.services";
import { IField } from "../../../types/fields.types";
import { IAddress, IRescue } from "../../../types/rescue.types";
import FormPage from "../../molecules/AnimalForm";

interface Hook {
  isValidForm: boolean;
  t: TFunction;
  goBack: () => void;
  pages: any[];
  currentPage: number;
  next: () => void;
  submitForm: () => void;
  isLoading: boolean;
  animalEditData: IRescue;
}

export default function useNewAnimal(): Hook {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [fields, setFields] = useState([]);
  const [isValidForm, setIsValidForm] = useState(false);
  const [firstSectionTypes, setFirstSectionTypes] = useState([]);
  const [secondSectionTypes, setSecondSectionTypes] = useState([]);
  const [thirdSectionTypes, setThirdSectionTypes] = useState([]);
  const [animalData, setAnimalData] = useState([]);
  const [animalToSend, setAnimalToSend]: any = useState();
  const [animalEditData, setAnimalEditData] = useState(null);
  const { t } = useTranslation(NEW_ANIMAL_PAGE);
  const dispatch = useDispatch();
  const [formData, setFormData]: any[] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const pages = [
    {
      id: 1,
      title: t(NEW_ANIMAL_FORM_FIRST),
      formPage: (
        <FormPage
          formData={formData}
          setFormData={setFormData}
          setAnimalToSend={setAnimalToSend}
          animalToSend={animalToSend}
          animalData={animalData}
          fields={fields.filter(
            (x) => x.FormSection === t(NEW_ANIMAL_FORM_FIRST)
          )}
          types={firstSectionTypes}
          section={t(NEW_ANIMAL_FORM_FIRST)}
          key={0}
        />
      ),
    },
    {
      id: 2,
      title: t(NEW_ANIMAL_FORM_SECOND),
      formPage: (
        <FormPage
          formData={formData}
          setFormData={setFormData}
          fields={fields.filter(
            (x) => x.FormSection === t(NEW_ANIMAL_FORM_SECOND)
          )}
          types={secondSectionTypes}
          section={t(NEW_ANIMAL_FORM_SECOND)}
          key={1}
        />
      ),
    },
    {
      id: 3,
      title: t(NEW_ANIMAL_FORM_THIRD),
      formPage: (
        <FormPage
          formData={formData}
          setFormData={setFormData}
          fields={fields.filter(
            (x) => x.FormSection === t(NEW_ANIMAL_FORM_THIRD)
          )}
          types={thirdSectionTypes}
          section={t(NEW_ANIMAL_FORM_THIRD)}
          key={2}
        />
      ),
    },
  ];

  const getTypes = (data, section) => {
    const dataTypes = [];
    data.forEach((element) => {
      if (
        !dataTypes.includes(element.FieldType) &&
        section === element.FormSection
      ) {
        dataTypes.push(element.FieldType);
      }
    });

    return dataTypes;
  };

  // create a JSON object with all the fields avaiable as keys
  const createBasicData = (data) => {
    let inputData = "{";
    for (let index = 0; index < data.length; index += 1) {
      inputData += `"${data[index].FieldName}": "", `;
    }
    inputData = inputData.slice(0, -2);
    inputData += "}";

    return inputData;
  };

  const buildAddressEditField = (field: IField, addressData: IAddress) => {
    const cantonField = {
      isRequired: field.IsRequired,
      id: field.FieldId,
      value: addressData.Canton,
      valid: true,
    };

    const provinceField = {
      isRequired: field.IsRequired,
      id: field.FieldId,
      value: addressData.Provincia,
      valid: true,
    };

    const districtField = {
      isRequired: field.IsRequired,
      id: field.FieldId,
      value: addressData.Distrito,
      valid: true,
    };

    const exactField = {
      isRequired: field.IsRequired,
      id: field.FieldId,
      value: addressData.Exacta,
      valid: true,
    };

    const addressObj = {};
    addressObj[CANTON_FIELD] = { ...cantonField };
    addressObj[PROVINCE_FIELD] = { ...provinceField };
    addressObj[DISTRICT_FIELD] = { ...districtField };
    addressObj[EXACT_DIRECTION_FIELD] = { ...exactField };

    return addressObj;
  };

  const buildAddressField = (
    field: IField,
    rescueEditData: IRescue | undefined = undefined
  ) => {
    const addressData: IAddress | undefined = rescueEditData
      ? JSON.parse(
          rescueEditData[DIRECTION_FIELD]
            ? rescueEditData[DIRECTION_FIELD]
            : "{}"
        )
      : undefined;
    let addressObj = {};

    if (addressData) {
      addressObj = buildAddressEditField(field, addressData);
    } else {
      const valueObj = {
        isRequired: field.IsRequired,
        id: field.FieldId,
        value: "",
        valid: false,
      };

      addressObj[CANTON_FIELD] = { ...valueObj };
      addressObj[EXACT_DIRECTION_FIELD] = { ...valueObj };
      addressObj[DISTRICT_FIELD] = { ...valueObj };
      addressObj[PROVINCE_FIELD] = { ...valueObj };
    }
    return addressObj;
  };

  const setForm = (
    data: IField[],
    rescueEditData: IRescue | undefined = undefined
  ) => {
    let firstForm = {
      section: t(NEW_ANIMAL_FORM_FIRST),
    };
    let secondForm = {
      section: t(NEW_ANIMAL_FORM_SECOND),
    };
    let thirdForm = {
      section: t(NEW_ANIMAL_FORM_THIRD),
    };
    const animalFieldsData = rescueEditData
      ? JSON.parse(rescueEditData.Fields)
      : rescueEditData;

    data.forEach((field) => {
      const fieldValues = {
        isRequired: field.IsRequired,
        id: field.FieldId,
        // eslint-disable-next-line
        value: animalFieldsData
          ? field.FieldName in animalFieldsData
            ? animalFieldsData[field.FieldName]
            : ""
          : "",
        valid: animalFieldsData ? field.FieldName in animalFieldsData : false,
      };

      switch (field.FormSection) {
        case t(NEW_ANIMAL_FORM_FIRST):
          if (field.FieldType === ADDRESS_FIELD_TYPE) {
            firstForm = {
              ...firstForm,
              ...buildAddressField(field, animalFieldsData),
            };
          } else {
            firstForm[field.FieldName] = fieldValues;
          }
          break;
        case t(NEW_ANIMAL_FORM_SECOND):
          if (field.FieldType === ADDRESS_FIELD_TYPE) {
            secondForm = {
              ...secondForm,
              ...buildAddressField(field, animalFieldsData),
            };
          } else {
            secondForm[field.FieldName] = fieldValues;
          }
          break;
        case t(NEW_ANIMAL_FORM_THIRD):
          if (field.FieldType === ADDRESS_FIELD_TYPE) {
            thirdForm = {
              ...thirdForm,
              ...buildAddressField(field, animalFieldsData),
            };
          } else {
            thirdForm[field.FieldName] = fieldValues;
          }
          break;
        default:
          break;
      }
    });
    setFormData([firstForm, secondForm, thirdForm]);
  };

  async function getAnimals() {
    const animals = await FormService.getAnimalInfo();
    return animals.data.response;
  }

  async function getFields() {
    const fieldData = await FormService.getFormFields(1);
    const animals = await getAnimals();
    setAnimalData(animals);

    let animalRescueData;

    if (params.animalId) {
      const rescueAnimal = await RescueService.getRescue();
      animalRescueData = rescueAnimal.data.response.find(
        (x) => x.id.toString() === params.animalId
      );
      setAnimalEditData(animalRescueData);

      const animalSelected = animals.find(
        (animal) => animal.id === animalRescueData.AnimalId
      );

      if (animalSelected) {
        setAnimalToSend(animalSelected);
      }
    }

    setForm(fieldData.data.response, animalRescueData);
    setFields(fieldData.data.response);
    setThirdSectionTypes(
      getTypes(fieldData.data.response, t(NEW_ANIMAL_FORM_THIRD))
    );
    setSecondSectionTypes(
      getTypes(fieldData.data.response, t(NEW_ANIMAL_FORM_SECOND))
    );
    setFirstSectionTypes(
      getTypes(fieldData.data.response, t(NEW_ANIMAL_FORM_FIRST))
    );
    setLoading(false);
    return fieldData.data.response;
  }

  async function getAddressOptions() {
    const addressOptions = await AddressService.getAddressOptions();
    dispatch(addressAction.getAddress(addressOptions.data.response));
  }

  const validateFields = (section) => {
    // eslint-disable-next-line
    for (const element in section) {
      if (section[element].isRequired) {
        if (!section[element].valid) {
          return false;
        }
      }
    }

    return true;
  };

  React.useEffect(() => {
    getAddressOptions();

    getFields().then((data) => {
      const newFields = createBasicData(data);
      RescueObservable.setRescue(newFields);
    });
  }, []);

  React.useEffect(() => {
    const isValid = validateFields(formData[currentPage]);
    setIsValidForm(animalToSend ? isValid : false);
  }, [formData, currentPage, animalToSend]);

  const goBack = () => {
    if (currentPage === 0) {
      navigate(-1);
    } else {
      setCurrentPage((prevCurrentPage) => {
        return prevCurrentPage - 1;
      });
    }
  };

  const buildPaydload = () => {
    let payload = {};
    const form = {};

    formData.forEach((element) => {
      payload = { ...payload, ...element };
    });

    Object.keys(payload).forEach((x) => {
      form[x] = payload[x].value;
    });

    const address = {
      Canton: form[CANTON_FIELD],
      Exacta: form[EXACT_DIRECTION_FIELD],
      Distrito: form[DISTRICT_FIELD],
      Provincia: form[PROVINCE_FIELD],
    };
    form[DIRECTION_FIELD] = JSON.stringify(address);

    return form;
  };

  const submitForm = () => {
    const payload = buildPaydload();
    if (!animalEditData) {
      RescueService.addRescue(animalToSend.id, 1, 1, JSON.stringify(payload));
    } else {
      RescueService.updateRescue(
        animalEditData.id,
        JSON.stringify(payload),
        animalEditData.AnimalId
      );
    }
    navigate(RESCUE_ROUTE, { replace: false });
  };

  const next = () => {
    if (
      currentPage + 1 < pages.length &&
      validateFields(formData[currentPage])
    ) {
      setCurrentPage((prevCurrentPage) => {
        return prevCurrentPage + 1;
      });
    }
  };

  return {
    isValidForm,
    t,
    goBack,
    pages,
    currentPage,
    next,
    submitForm,
    isLoading,
    animalEditData,
  };
}
