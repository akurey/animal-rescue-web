import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

interface TableProps extends React.HTMLAttributes<HTMLInputElement> {
  items?: any[];
}

function TableComponent({ items }: TableProps) {
  const navigate = useNavigate();

  const onView = (animalId: string) => {
    navigate(`/rescues/${animalId}`);
  };

  const onEdit = (animalId: string) => {
    navigate(`/rescues/${animalId}`); // Todo Change link path to Edit
  };

  return (
    <div className="table--container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table--header" align="left">
              Nombre
            </TableCell>
            <TableCell className="table--header" align="left">
              Nombre Común
            </TableCell>
            <TableCell className="table--header" align="left">
              Fecha de Ingreso
            </TableCell>
            <TableCell className="table--header" align="left">
              Lugar de Rescate
            </TableCell>
            <TableCell className="table--header" align="left">
              Distribución
            </TableCell>
            <TableCell className="table--header" align="left">
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.comunName}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.place}</TableCell>
              <TableCell align="left">{row.distribution}</TableCell>
              <TableCell align="left">
                <Button
                  onClick={() => onView(row.id)}
                  buttonStyle="btn--link"
                  className="table--link"
                >
                  Ver
                </Button>
                <Button
                  onClick={() => onEdit(row.id)}
                  buttonStyle="btn--link"
                  className="table--link"
                >
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableComponent;
