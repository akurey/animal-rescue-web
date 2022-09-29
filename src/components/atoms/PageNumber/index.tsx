import { Pagination } from "@mui/material";
import React from "react";
import "./styles.scss";

interface PageNumberProps {
  pages?: number;
  currentPage?: number;
}

function PageNumber({ pages = 2, currentPage = 1 }: PageNumberProps) {
  return (
    <div className="page-numbers">
      <Pagination
        disabled
        count={pages}
        page={currentPage}
        variant="outlined"
        color="primary"
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default PageNumber;
