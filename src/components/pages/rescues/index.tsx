import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../../atoms/Button";
import Table from "../../molecules/table";
import "./styles.scss";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import {
  RESCUES_IN_REVIEW,
  RESCUES_NEW,
  RESCUES_PAGE,
  RESCUES_PUBLIC,
  RESCUES_TITLE,
} from "../../../constants/translations";

const REVIEW = "review";
const PUBLIC = "public";

function RescuesComponent() {
  const [filter, setFilter] = useState(REVIEW);
  const { t } = useTranslation(RESCUES_PAGE);
  const navigate = useNavigate();

  const goToNewAnimal = () => {
    navigate("new");
  };

  return (
    <>
      <Breadcrumbs />
      <h1>{t(RESCUES_TITLE)}</h1>
      <Button onClick={goToNewAnimal} className="rescues--button">
        <AddIcon fontSize="medium" /> {t(RESCUES_NEW)}
      </Button>

      <div className="rescues--filters">
        <Button
          onClick={() => setFilter(REVIEW)}
          className={`rescues--filter ${
            filter === REVIEW && "rescues--filter-active"
          }`}
        >
          {t(RESCUES_IN_REVIEW)}
        </Button>
        <Button
          onClick={() => setFilter(PUBLIC)}
          className={`rescues--filter ${
            filter === PUBLIC && "rescues--filter-active"
          }`}
        >
          {t(RESCUES_PUBLIC)}
        </Button>
      </div>
      <Table
        // TODO: update real data
        items={[
          {
            id: "1",
            name: "Perro",
            comunName: "Firulais1",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
          {
            id: "2",
            name: "Perro",
            comunName: "Firulais2",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
          {
            id: "3",
            name: "Perro",
            comunName: "Firulais3",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
          {
            id: "4",
            name: "Perro",
            comunName: "Firulais4",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
          {
            id: "5",
            name: "Perro",
            comunName: "Firulais5",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
          {
            id: "6",
            name: "Perro",
            comunName: "Firulais6",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
          {
            id: "7",
            name: "Perro",
            comunName: "Firulais7",
            date: "29/07/2022",
            place: "Málaga",
            distribution: "-",
          },
        ]}
      />
    </>
  );
}

export default RescuesComponent;
