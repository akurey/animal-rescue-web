import React from "react";
import "./animal.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ANIMAL_PAGE, ANIMAL_TITLE } from "../../../constants/translations";

function Animal() {
  const params = useParams();
  const { animalId } = params;
  const { t } = useTranslation(ANIMAL_PAGE);

  return (
    <div>
      <h1 className="animal-name">
        {t(ANIMAL_TITLE)}
        {animalId}
      </h1>
    </div>
  );
}

export default Animal;
