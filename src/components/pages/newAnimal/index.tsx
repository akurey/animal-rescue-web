import React from "react";
import {
  NEW_ANIMAL_BACK,
  NEW_ANIMAL_QUIT,
  NEW_ANIMAL_NEW,
  NEW_ANIMAL_NEXT,
  NEW_ANIMAL_TITLE,
  EDIT_ANIMAL_TITLE,
  NEW_ANIMAL_EDIT,
} from "../../../constants/translations";
import Button from "../../atoms/Button";
import PageNumber from "../../atoms/PageNumber";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import useNewAnimal from "./useNewAnimal";
import "./styles.scss";

function NewAnimal() {
  const {
    isValidForm,
    t,
    goBack,
    pages,
    currentPage,
    next,
    submitForm,
    isLoading,
    animalEditData,
  } = useNewAnimal();

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      <Breadcrumbs />
      <div className="row">
        <div>
          <h2>{animalEditData ? t(EDIT_ANIMAL_TITLE) : t(NEW_ANIMAL_TITLE)}</h2>
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
                <Button
                  disabled={!isValidForm}
                  buttonSize="btn--medium"
                  onClick={next}
                >
                  {t(NEW_ANIMAL_NEXT)}
                </Button>
              )}
            </div>
            {currentPage === 2 && (
              <Button
                disabled={!isValidForm}
                buttonSize="btn--medium"
                onClick={submitForm}
              >
                {animalEditData ? t(NEW_ANIMAL_EDIT) : t(NEW_ANIMAL_NEW)}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewAnimal;
