import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Table from "../../molecules/table";
import "./styles.scss";
import Breadcrumbs from "../../molecules/Breadcrumbs";
import RescueService from "../../../services/rescue.services";

const REVIEW = "review";
const PUBLIC = "public";

function RescuesComponente() {
  const [filter, setFilter] = useState(REVIEW);
  const [isLoading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);
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
      <h1>Animales Rescatados</h1>
      <Button onClick={goToNewAnimal} className="rescues--button">
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
      <Table items={animals} />
    </>
  );
}

export default RescuesComponente;
