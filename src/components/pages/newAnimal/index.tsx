import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  NEW_ANIMAL_BACK,
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
import AnimalForm1 from "../../molecules/AnimalForm/page1";
import AnimalForm2 from "../../molecules/AnimalForm/page2";
import AnimalForm3 from "../../molecules/AnimalForm/page3";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import "./styles.scss";

function NewAnimal() {
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation(NEW_ANIMAL_PAGE);
  const navigate = useNavigate();
  const pages = [
    {
      id: 1,
      title: t(NEW_ANIMAL_FORM_FIRST),
      formPage: <AnimalForm1 />,
    },
    {
      id: 2,
      title: t(NEW_ANIMAL_FORM_SECOND),
      formPage: <AnimalForm2 />,
    },
    {
      id: 3,
      title: t(NEW_ANIMAL_FORM_THIRD),
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
              <Button buttonSize="btn--small" onClick={goBack}>
                {t(NEW_ANIMAL_BACK)}
              </Button>
              <Button buttonSize="btn--medium" onClick={next}>
                {t(NEW_ANIMAL_NEXT)}
              </Button>
            </div>
            <Button
              buttonStyle="btn--secondary"
              buttonSize="btn--medium"
              onClick={next}
            >
              {t(NEW_ANIMAL_NEW)}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAnimal;
