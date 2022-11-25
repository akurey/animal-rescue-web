import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../../atoms/Button";
import Table from "../../molecules/table";
import "./styles.scss";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import RescueService from "../../../services/rescue.services";
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
  const [isLoading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);
  const { t } = useTranslation(RESCUES_PAGE);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getFields() {
      const animalData = await RescueService.getRescue();
      setAnimals(animalData.data.response);
      setLoading(false);
    }
    getFields();
  }, []);

  const goToNewAnimal = () => {
    navigate("new");
  };
  if (isLoading) {
    return <div />;
  }

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
      <Table items={animals} />
    </>
  );
}

export default RescuesComponent;
