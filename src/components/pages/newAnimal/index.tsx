import React, { useState } from "react";
import Button from "../../atoms/Button";
import PageNumber from "../../atoms/PageNumber";
import AnimalForm1 from "../../molecules/AnimalForm/page1";
import AnimalForm2 from "../../molecules/AnimalForm/page2";
import "./styles.scss";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(1);

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
        {currentPage === 1 ? <AnimalForm1 /> : <AnimalForm2 />}
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
