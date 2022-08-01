import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./styles.scss";
import Button from "../../atoms/button";

interface TableProps extends React.HTMLAttributes<HTMLInputElement> {
  items?: any[];
}

function TableComponent({ items }: TableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Nombre</TableCell>
          <TableCell align="left">Nombre Común</TableCell>
          <TableCell align="left">Fecha de Ingreso</TableCell>
          <TableCell align="left">Lugar de Rescate</TableCell>
          <TableCell align="left">Distribución</TableCell>
          <TableCell align="left">Acciones</TableCell>
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
              <Button onClick={() => {}} className="btn--link">
                Ver
              </Button>
              <Button onClick={() => {}} className="btn--link">
                Editar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableComponent;
