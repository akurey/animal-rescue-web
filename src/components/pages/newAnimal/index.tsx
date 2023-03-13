import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormService from "../../../services/form.services";
import {
  NEW_ANIMAL_BACK,
  NEW_ANIMAL_QUIT,
  NEW_ANIMAL_FORM_FIRST,
  NEW_ANIMAL_FORM_SECOND,
  NEW_ANIMAL_FORM_THIRD,
  NEW_ANIMAL_NEW,
  NEW_ANIMAL_NEXT,
  NEW_ANIMAL_PAGE,
  NEW_ANIMAL_TITLE,
} from "../../../constants/translations";
import Button from "../../atoms/Button";
import PageNumber from "../../atoms/PageNumber";
import FormPage from "../../molecules/AnimalForm";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import { RescueObservable } from "../../../observables/rescue.observable";
import { useObservable } from "../../../hooks/use-observable.hook";
import RescueService from "../../../services/rescue.services";
import "./styles.scss";
import AddressService from "../../../services/address.service";
import { addressAction } from "../../../reducers/address/actions";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [fields, setFields] = useState([]);
  const [firstSectionTypes, setFirstSectionTypes] = useState([]);
  const [secondSectionTypes, setSecondSectionTypes] = useState([]);
  const [thirdSectionTypes, setThirdSectionTypes] = useState([]);
  const [animalData, setAnimalData] = useState([]);
  const [animalToSend, setAnimalToSend]: any = useState();
  const [rescue] = useObservable(RescueObservable.rescue$);
  const { t } = useTranslation(NEW_ANIMAL_PAGE);
  const dispatch = useDispatch();
  const [formData, setFormData]: object[] = useState([
    {
      section: t(NEW_ANIMAL_FORM_FIRST),
    },
    {
      section: t(NEW_ANIMAL_FORM_SECOND),
    },
    {
      section: t(NEW_ANIMAL_FORM_THIRD),
    },
  ]);

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

  async function getFields() {
    const fieldData = await FormService.getFormFields(1);
    setFields(fieldData.data.response);
    setThirdSectionTypes(
      getTypes(fieldData.data.response, t(NEW_ANIMAL_FORM_FIRST))
    );
    setSecondSectionTypes(
      getTypes(fieldData.data.response, t(NEW_ANIMAL_FORM_SECOND))
    );
    setFirstSectionTypes(
      getTypes(fieldData.data.response, t(NEW_ANIMAL_FORM_THIRD))
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

  if (isLoading) {
    return <div />;
  }

  const goBack = () => {
    if (currentPage === 0) {
      navigate(-1);
    } else {
      setCurrentPage((prevCurrentPage) => {
        return prevCurrentPage - 1;
      });
    }
  };

  const next = () => {
    if (currentPage + 1 < pages.length) {
      setCurrentPage((prevCurrentPage) => {
        return prevCurrentPage + 1;
      });
    } else {
      // TODO: Validate and send proper formId & reporterId
      const rescueObj = JSON.parse(rescue);
      const address = {
        Canton: rescueObj["Cantón"],
        Exacta: rescueObj.Observaciones,
        Distrito: rescueObj["Dirección exacta"],
        Provincia: rescueObj.Provincia,
      };

      rescueObj["Dirección"] = JSON.stringify(address);
      const newRescue = JSON.stringify(rescueObj);
      RescueService.addRescue(animalToSend.id, 1, 1, newRescue);
      navigate(-1);
    }
  };

  return (
    <>
      <Breadcrumbs />
      <div className="row">
        <div>
          <h2>{t(NEW_ANIMAL_TITLE)}</h2>
        </div>
        <div className="form">
          <PageNumber
            pages={pages.map((page) => {
              return page.title;
            })}
            currentPage={currentPage + 1}
          />
          {pages[currentPage].formPage}
          <div className="button-layout">
            <div>
              <Button
                buttonStyle="btn--secondary"
                buttonSize="btn--small"
                onClick={goBack}
              >
                {currentPage === 0 ? t(NEW_ANIMAL_QUIT) : t(NEW_ANIMAL_BACK)}
              </Button>
              {currentPage !== 2 && (
                <Button buttonSize="btn--medium" onClick={next}>
                  {t(NEW_ANIMAL_NEXT)}
                </Button>
              )}
            </div>
            {currentPage === 2 && (
              <Button buttonSize="btn--medium" onClick={next}>
                {t(NEW_ANIMAL_NEW)}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAnimal;
