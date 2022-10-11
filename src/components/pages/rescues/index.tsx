import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../atoms/Button";
import Table from "../../molecules/table";
import "./styles.scss";
import Breadcrumbs from "../../molecules/Breadcrumbs";

const REVIEW = "review";
const PUBLIC = "public";

function RescuesComponente() {
  const [filter, setFilter] = useState(REVIEW);

  return (
    <>
      <Breadcrumbs />
      <h1>Animales Rescatados</h1>
      <Button onClick={() => {}} className="rescues--button">
        <AddIcon fontSize="medium" /> nuevo animal
      </Button>

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
          {
            id: "2",
            name: "Perro",
            comunName: "Firulais",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
          // {
          //   id: "3",
          //   name: "Perro",
          //   comunName: "Firulais",
          //   date: "29/07/2022",
          //   place: "Málaga",
          //   distribution: "-",
          // },
          // {
          //   id: "4",
          //   name: "Perro",
          //   comunName: "Firulais",
          //   date: "29/07/2022",
          //   place: "Málaga",
          //   distribution: "-",
          // },
          // {
          //   id: "5",
          //   name: "Perro",
          //   comunName: "Firulais",
          //   date: "29/07/2022",
          //   place: "Málaga",
          //   distribution: "-",
          // },
          // {
          //   id: "6",
          //   name: "Perro",
          //   comunName: "Firulais",
          //   date: "29/07/2022",
          //   place: "Málaga",
          //   distribution: "-",
          // },
          // {
          //   id: "7",
          //   name: "Perro",
          //   comunName: "Firulais",
          //   date: "29/07/2022",
          //   place: "Málaga",
          //   distribution: "-",
          // },
        ]}
      />
    </>
  );
}

export default RescuesComponente;
