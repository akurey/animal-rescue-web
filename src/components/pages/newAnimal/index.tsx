import React, { useState } from "react";
import FormService from "../../../services/form.services";
import Button from "../../atoms/Button";
import PageNumber from "../../atoms/PageNumber";
import AnimalForm1 from "../../molecules/AnimalForm/page1";
import AnimalForm2 from "../../molecules/AnimalForm/page2";
import "./styles.scss";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [fields, setFields] = useState([]);
  const [types, setTypes] = useState([]);

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
    if (currentPage === 1) {
      // TODO: return to rescues page
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = () => {
    if (currentPage + 1 <= 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Nuevo animal rescatado</h1>
      </div>
      <PageNumber pages={2} currentPage={currentPage} />
      <div className="form">
        {currentPage === 1 ? (
          <AnimalForm1 fields={fields} types={types} />
        ) : (
          <AnimalForm2 fields={fields} types={types} />
        )}
      </div>
      <div className="button-layout">
        <Button
          buttonStyle="btn--secondary"
          buttonSize="btn--small"
          onClick={goBack}
        >
          {currentPage === 1 ? "Cancelar" : "Anterior"}
        </Button>
        <Button buttonSize="btn--medium" onClick={next}>
          {currentPage === 1 ? "Siguiente" : "Guardar"}
        </Button>
      </div>
    </div>
  );
}

export default NewAnimal;
