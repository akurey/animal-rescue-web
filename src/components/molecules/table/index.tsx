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
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RESCUE_EDIT_ROUTE } from "../../../constants/routes.types";
import {
  RESCUES_PAGE,
  RESCUES_TABLE_CASE_NUMBER,
  RESCUES_TABLE_COMMON_NAME,
  RESCUES_TABLE_ADMISSION_NAME,
  RESCUES_TABLE_RESCUE_PLACE,
} from "../../../constants/translations";

interface TableProps extends React.HTMLAttributes<HTMLInputElement> {
  items?: any[];
}

function TableComponent({ items }: TableProps) {
  const { t } = useTranslation(RESCUES_PAGE);
  const [page, setPage] = useState(0);
  const [firstRow, setFirstRow] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(items.slice(0, rowsPerPage));
  const [menuElementSelectedId, setMenuElementSelectedId] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleChangeRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(e.target.value));
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
    setRows(items.slice(firstRow, firstRow + rowsPerPage));
  }, [firstRow]);

  useEffect(() => {
    setFirstRow((prevFirstRow) => {
      const newFirstRow = prevFirstRow - (prevFirstRow % rowsPerPage);
      setRows(items.slice(newFirstRow, newFirstRow + rowsPerPage));
      return newFirstRow;
    });
  }, [rowsPerPage]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const idElement = event.currentTarget.id.split("-");
    setMenuElementSelectedId(idElement.slice(-1)[0]);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    if (menuElementSelectedId) {
      navigate(RESCUE_EDIT_ROUTE.replace(":animalId", menuElementSelectedId));
    }
  };

  const loadRescuePlaceField = (payload: any) => {
    const fields = JSON.parse(payload.Fields);
    const direction = fields["Dirección"];
    let rescuePlaceField = "Desconocido";

    if (direction) {
      const parseDirection = JSON.parse(direction);
      rescuePlaceField = `${parseDirection.Provincia}, ${parseDirection.Canton}`;
    }

    return rescuePlaceField;
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
              {t(RESCUES_TABLE_CASE_NUMBER)}
            </TableCell>
            <TableCell className="table--header" align="left">
              {t(RESCUES_TABLE_COMMON_NAME)}
            </TableCell>
            <TableCell className="table--header" align="left">
              {t(RESCUES_TABLE_ADMISSION_NAME)}
            </TableCell>
            <TableCell className="table--header" align="left">
              {t(RESCUES_TABLE_RESCUE_PLACE)}
            </TableCell>

            <TableCell className="table--header" align="center">
              <FilterListSharpIcon className="icon" fontSize="medium" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any, index: Number) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow className="table--row" key={`${row.AnimalId}${index}`}>
              <TableCell>
                <Checkbox className="checkbox" />
              </TableCell>
              <TableCell className="table--data" align="left">
                {row.id}
              </TableCell>
              <TableCell className="table--data" align="left">
                {row.AnimalName}
              </TableCell>
              <TableCell className="table--data" align="left">
                {row.CreatedAt}
              </TableCell>
              <TableCell className="table--data" align="left">
                {row.PlaceOfRescue
                  ? row.PlaceOfRescue
                  : loadRescuePlaceField(row)}
              </TableCell>

              <TableCell className="table--data" align="center">
                <IconButton
                  aria-label="more"
                  id={`long-button-${row.id}`}
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
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem
                    key={`see_option${row.id}`}
                    onClick={() => handleEdit()}
                  >
                    Ver
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        className="table-pagination"
        rowsPerPageOptions={[5, 10, 25]}
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
