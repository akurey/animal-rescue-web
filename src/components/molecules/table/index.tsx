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
import { IconButton, Menu, MenuItem, TablePagination } from "@material-ui/core";

interface TableProps extends React.HTMLAttributes<HTMLInputElement> {
  items?: any[];
}

function TableComponent({ items }: TableProps) {
  const [page, setPage] = useState(0);
  const [firstRow, setFirstRow] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(items.slice(0, rowsPerPage));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChangeRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(e.target.value));
    setFirstRow((prevFirstRow) => {
      return prevFirstRow - (prevFirstRow % Number(e.target.value));
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    if (newPage < page) {
      setFirstRow((prevFirstRow) => {
        return prevFirstRow - rowsPerPage;
      });
    } else {
      setFirstRow((prevFirstRow) => {
        return prevFirstRow + rowsPerPage;
      });
    }
    setPage(newPage);
  };

  useEffect(() => {
    setRows(() => {
      return items.slice(firstRow, firstRow + rowsPerPage);
    });
  }, [firstRow, rows]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="table--container">
      <Table size="small">
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
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: "8rem",
                      width: "7rem",
                      background: "#FFEF0A",
                    },
                  }}
                >
                  <MenuItem
                    key={`see_option${row.id}`}
                    selected
                    onClick={handleClose}
                  >
                    Ver
                  </MenuItem>
                  <MenuItem key={`edit_option${row.id}`} onClick={handleClose}>
                    Editar
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        className="table-pagination"
        rowsPerPageOptions={[2, 3, 4, 5, 10, 25]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRows}
      />
    </div>
  );
}

export default TableComponent;
