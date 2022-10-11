import React from "react";
import "./styles.scss";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Button, Numeric } from "../../atoms";

// interface TableRowConfigProps {
//   className?: string;
//   onChange?: (e: any) => void;
//   onNext?: (e: any) => void;
//   onPrev?: (e: any) => void;
// }

function TableRowConfig(/* { className, onChange, onNext, onPrev } */) {
  return (
    <div className="table-row-config">
      <p>Rows per page:</p>
      <Numeric placeholder="5" className="page-numeric" />
      <p>1-5 of 13</p>
      <Button onClick={() => {}} buttonStyle="btn--link">
        <ChevronLeftRoundedIcon className="icon" fontSize="medium" />
      </Button>
      <Button onClick={() => {}} buttonStyle="btn--link">
        <ChevronRightRoundedIcon className="icon" fontSize="medium" />
      </Button>
    </div>
  );
}

export default TableRowConfig;
