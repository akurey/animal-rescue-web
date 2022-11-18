import React from "react";
import "./styles.scss";

interface PageNumberProps {
  pages?: string[];
  currentPage?: number;
}

function PageNumber({
  pages = ["Page 1", "Page 2"],
  currentPage = 1,
}: PageNumberProps) {
  return (
    <div className="pages">
      {pages.map((title, page) => {
        return (
          <>
            <div className="page">
              <div
                className={`page-circle ${
                  page + 1 === currentPage && "current-circle"
                }`}
              >
                {page + 1}
              </div>
              <p
                className={`page-title ${
                  page + 1 === currentPage && "current-title"
                }`}
              >
                {title}
              </p>
            </div>
            {page + 1 < pages.length && <div className="separator" />}
          </>
        );
      })}
    </div>
  );
}

export default PageNumber;
