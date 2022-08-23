import React, { useState } from "react";
import "./styles.scss";

interface PageNumberProps {
  pages?: number;
  current?: number;
}

function PageNumber({ pages = 2, current = 1 }: PageNumberProps) {
  const [currentPage, setCurrentPage] = useState(current);

  const pagesArr = Array.from(Array(pages).keys());

  return (
    <div className="page-numbers">
      {false && setCurrentPage(1) /*  Delete  */}
      {pagesArr.map((page) => {
        return (
          <>
            <div
              className={page + 1 !== currentPage ? "page" : "current"}
              key={page + 1}
            >
              {page + 1}
            </div>
            {page !== pagesArr[pagesArr.length - 1] && (
              <hr className="separator" />
            )}
          </>
        );
      })}
    </div>
  );
}

export default PageNumber;
