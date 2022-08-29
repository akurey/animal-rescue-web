import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "../../atoms/Button";
import Table from "../../molecules/table";
import "./styles.scss";
import UserLogged from "../../atoms/UserLogged";

const REVIEW = "review";
const PUBLIC = "public";

function RescuesComponente() {
  const [filter, setFilter] = useState(REVIEW);

  return (
    <div className="page-layout">
      <div className="header">
        <h1>Animales Rescatados</h1>
        <UserLogged />
      </div>
      <div className="rescues--filters">
        <Button
          onClick={() => setFilter(REVIEW)}
          className={`rescues--filter ${
            filter === REVIEW && "rescues--filter-active"
          }`}
        >
          En Revisión
        </Button>
        <Button
          onClick={() => setFilter(PUBLIC)}
          className={`rescues--filter ${
            filter === PUBLIC && "rescues--filter-active"
          }`}
        >
          Públicos
        </Button>
      </div>
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
      <Button onClick={() => {}} className="rescues--button">
        <AddCircleIcon className="rescues--icon" /> nuevo animal
      </Button>
    </div>
  );
}

export default RescuesComponente;
