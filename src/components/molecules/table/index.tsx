import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./styles.scss";
import FilterListSharpIcon from "@mui/icons-material/FilterListSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Button from "../../atoms/Button";
import { Numeric } from "../../atoms";

interface TableProps extends React.HTMLAttributes<HTMLInputElement> {
  items?: any[];
}

function TableComponent({ items }: TableProps) {
  // const navigate = useNavigate();

  // const onView = (animalId: string) => {
  //   navigate(`/rescues/${animalId}`);
  // };

  // const onEdit = (animalId: string) => {
  //   navigate(`/rescues/${animalId}`); // Todo Change link path to Edit
  // };
  const [firstRow, setFirstRow] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(items.slice(0, rowsPerPage));

  const changeRows = (e: any) => {
    setRowsPerPage(Number(e.target.value));
    setFirstRow((prevFirstRow) => {
      return prevFirstRow - (prevFirstRow % Number(e.target.value));
    });
  };

  const onPrev = () => {
    setFirstRow((prevFirstRow) => {
      return prevFirstRow - rowsPerPage;
    });
  };

  const onNext = () => {
    setFirstRow((prevFirstRow) => {
      return prevFirstRow + rowsPerPage;
    });
  };

  useEffect(() => {
    setRows(items.slice(firstRow, firstRow + rowsPerPage));
  }, [firstRow]);

  return (
    <div className="table--container">
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
          {rows?.map((row: any) => (
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

      <div className="table-row-config">
        <p>Rows per page:</p>
        <Numeric
          value={rowsPerPage}
          className="page-numeric"
          onChange={changeRows}
        />
        <p>
          {firstRow + 1}-
          {firstRow + rowsPerPage <= items.length
            ? firstRow + rowsPerPage
            : items.length}{" "}
          of {items.length}
        </p>
        <Button
          onClick={onPrev}
          buttonStyle="btn--link"
          disabled={firstRow === 0}
        >
          <ChevronLeftRoundedIcon className="icon" fontSize="medium" />
        </Button>
        <Button
          onClick={onNext}
          buttonStyle="btn--link"
          disabled={firstRow + rowsPerPage >= items.length}
        >
          <ChevronRightRoundedIcon className="icon" fontSize="medium" />
        </Button>
      </div>
    </div>
  );
}

export default TableComponent;
