import React from "react";
import Button from "../../atoms/button";
import Table from "../../molecules/table";
import "./styles.scss";

function RescuesComponente() {
  return (
    <>
      <h1>Animales Rescatados</h1>
      <Table
        // TODO: update real data
        items={[
          {
            id: "1",
            name: "Perro",
            comunName: "Firulais",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
        ]}
      />
      <Button onClick={() => {}} buttonStyle="rescues--button">
        nuevo animal
      </Button>
    </>
  );
}

export default RescuesComponente;
