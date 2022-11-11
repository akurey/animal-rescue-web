import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import PageNumber from "../../atoms/PageNumber";
import AnimalForm1 from "../../molecules/AnimalForm/page1";
import AnimalForm2 from "../../molecules/AnimalForm/page2";
import AnimalForm3 from "../../molecules/AnimalForm/page3";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import "./styles.scss";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const pages = [
    {
      id: 1,
      title: "Datos del animal",
      formPage: <AnimalForm1 />,
    },
    {
      id: 2,
      title: "Datos del rescate",
      formPage: <AnimalForm2 />,
    },
    {
      id: 3,
      title: "Datos del rescatista",
      formPage: <AnimalForm3 />,
    },
  ];

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
