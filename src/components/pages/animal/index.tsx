import React from "react";
import "./animal.scss";
import { useParams } from "react-router-dom";

function Animal() {
  const params = useParams();
  const { animalId } = params;

  return (
    <div>
      <h1 className="animal-name">Animal Details {animalId}</h1>
    </div>
  );
}

export default Animal;
