import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormService from "../../../services/form.services";
import Button from "../../atoms/Button";
import PageNumber from "../../atoms/PageNumber";
import FormPage from "../../molecules/AnimalForm";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import "./styles.scss";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [fields, setFields] = useState([]);
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  const pages = [
    {
      id: 1,
      title: "Datos del animal",
      formPage: (
        <FormPage
          fields={fields}
          types={types}
          section="Datos del animal"
          key={0}
        />
      ),
    },
    {
      id: 2,
      title: "Datos del rescate",
      formPage: (
        <FormPage
          fields={fields}
          types={types}
          section="Datos del rescate"
          key={1}
        />
      ),
    },
    {
      id: 3,
      title: "Datos del rescatista",
      formPage: (
        <FormPage
          fields={fields}
          types={types}
          section="Datos del rescatista"
          key={2}
        />
      ),
    },
  ];

  const getTypes = (data) => {
    const dataTypes = [];
    data.forEach((element) => {
      if (!dataTypes.includes(element.FieldType)) {
        dataTypes.push(element.FieldType);
      }
    });
    setTypes(dataTypes);
  };

  React.useEffect(() => {
    async function getFields() {
      const fieldData = await FormService.getFormFields(1);
      setFields(fieldData.data.response);
      getTypes(fieldData.data.response);
      setLoading(false);
    }
    getFields();
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
    }
  };

  return (
    <>
      <Breadcrumbs />
      <div className="row">
        <div>
          <h2>Nuevo rescate</h2>
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
                {currentPage === 0 ? "Cancelar" : "Anterior"}
              </Button>
              <Button buttonSize="btn--medium" onClick={next}>
                {currentPage !== 2 ? "Siguiente" : "Guardar"}
              </Button>
            </div>
            <Button
              buttonStyle="btn--secondary"
              buttonSize="btn--medium"
              onClick={next}
            >
              Ingresar animal
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAnimal;
