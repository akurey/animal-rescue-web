import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import PageNumber from "../../atoms/PageNumber";
import AnimalForm1 from "../../molecules/AnimalForm/page1";
import AnimalForm2 from "../../molecules/AnimalForm/page2";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import "./styles.scss";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const goBack = () => {
    if (currentPage === 1) {
      navigate(-1);
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
    <>
      <Breadcrumbs />
      <div className="row">
        <div>
          <h2>Nuevo rescate</h2>
        </div>
        <div className="form">
          <PageNumber pages={2} currentPage={currentPage} />
          {currentPage === 1 ? <AnimalForm1 /> : <AnimalForm2 />}

          <div className="button-layout">
            <div>
              <Button buttonSize="btn--small" onClick={goBack}>
                Back
              </Button>
              <Button buttonSize="btn--medium" onClick={next}>
                Next
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
