import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./styles.scss";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox } from "@mui/material";
import Button from "../../atoms/Button";
import TableRowConfig from "../TableRowConfig";

interface TableProps extends React.HTMLAttributes<HTMLInputElement> {
  items?: any[];
}

function TableComponent({ items }: TableProps) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table--header" align="left">
              <Checkbox className="checkbox" />
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
            <TableCell className="table--header" align="center">
              <FilterListSharpIcon className="icon" fontSize="medium" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((row: any) => (
            <TableRow className="table--row" key={row.id}>
              <TableCell>
                <Checkbox className="checkbox" />
              </TableCell>
              <TableCell className="table--data" align="left">
                {row.comunName}
              </TableCell>
              <TableCell className="table--data" align="left">
                {row.date}
              </TableCell>
              <TableCell className="table--data" align="left">
                {row.place}
              </TableCell>
              <TableCell className="table--data" align="center">
                <Button onClick={() => {}} buttonStyle="btn--link">
                  <MoreVertIcon className="icon" fontSize="medium" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableRowConfig />
    </>
  );
}

export default TableComponent;
