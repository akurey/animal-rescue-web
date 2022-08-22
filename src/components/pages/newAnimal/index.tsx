import React, { useState } from "react";
import Button from "../../atoms/Button";
import AnimalForm1, { AnimalForm2 } from "../../molecules/animalForm";
import "./styles.scss";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(1);

  const goBack = () => {
    if (currentPage === 1) {
      // TODO: return to rescues page
    } else {
      setCurrentPage(1);
    }
  };

  const next = () => {
    setCurrentPage(2);
  };

  return (
    <div className="page-margin">
      <h1>Nuevo animal rescatado</h1>
      {/* Add page number component */}
      {currentPage === 1 ? <AnimalForm1 /> : <AnimalForm2 />}
      <div className="button-layout">
        <Button
          buttonStyle="btn--secondary"
          buttonSize="btn--small"
          onClick={goBack}
        >
          {currentPage === 1 ? "Cancelar" : "Anterior"}
        </Button>
        <Button buttonSize="btn--medium" onClick={next}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default NewAnimal;
