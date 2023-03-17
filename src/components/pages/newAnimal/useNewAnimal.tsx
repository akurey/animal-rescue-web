import { TFunction } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CANTON_FIELD,
  EXACT_DIRECTION_FIELD,
  DISTRICT_FIELD,
  PROVINCE_FIELD,
  ADDRESS_FIELD_TYPE,
  DIRECTION_FIELD,
} from "../../../constants/fields.constant";
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
  const { t } = useTranslation(NEW_ANIMAL_PAGE);
  const dispatch = useDispatch();
  const [formData, setFormData]: any[] = useState([]);

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

  const buildAddressField = (field: IField) => {
    const valueObj = {
      isRequired: field.IsRequired,
      id: field.FieldId,
      value: "",
      valid: false,
    };
    const addressObj = {};
    addressObj[CANTON_FIELD] = { ...valueObj };
    addressObj[EXACT_DIRECTION_FIELD] = { ...valueObj };
    addressObj[DISTRICT_FIELD] = { ...valueObj };
    addressObj[PROVINCE_FIELD] = { ...valueObj };
    return addressObj;
  };

  const setForm = (data: IField[]) => {
    let firstForm = {
      section: t(NEW_ANIMAL_FORM_FIRST),
    };
    let secondForm = {
      section: t(NEW_ANIMAL_FORM_SECOND),
    };
    let thirdForm = {
      section: t(NEW_ANIMAL_FORM_THIRD),
    };

    data.forEach((field) => {
      const fieldValues = {
        isRequired: field.IsRequired,
        id: field.FieldId,
        value: "",
        valid: false,
      };

      switch (field.FormSection) {
        case t(NEW_ANIMAL_FORM_FIRST):
          if (field.FieldType === ADDRESS_FIELD_TYPE) {
            firstForm = { ...firstForm, ...buildAddressField(field) };
          } else {
            firstForm[field.FieldName] = fieldValues;
          }
          break;
        case t(NEW_ANIMAL_FORM_SECOND):
          if (field.FieldType === ADDRESS_FIELD_TYPE) {
            secondForm = { ...secondForm, ...buildAddressField(field) };
          } else {
            secondForm[field.FieldName] = fieldValues;
          }
          break;
        case t(NEW_ANIMAL_FORM_THIRD):
          if (field.FieldType === ADDRESS_FIELD_TYPE) {
            thirdForm = { ...thirdForm, ...buildAddressField(field) };
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

  async function getFields() {
    const fieldData = await FormService.getFormFields(1);
    setForm(fieldData.data.response);
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

  async function getAnimals() {
    const animals = await FormService.getAnimalInfo();
    return animals.data.response;
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
    getAnimals().then((data) => {
      setAnimalData(data);
    });
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
    RescueService.addRescue(animalToSend.id, 1, 1, JSON.stringify(payload));
    navigate(-1);
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
  };
}
