import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./styles.scss";

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs();

  const getDisplayName = (name: string) => {
    const names = name.split("/");
    return name === "/"
      ? "Inicio"
      : names[names.length - 1].charAt(0).toUpperCase() +
          names[names.length - 1].substring(1);
  };

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb) => {
        return (
          <React.Fragment key={breadcrumb.key}>
            <Link to={breadcrumb.key} className="link">
              {getDisplayName(breadcrumb.key)}
            </Link>
            {breadcrumb !== breadcrumbs[breadcrumbs.length - 1] && (
              <div className="slash">/</div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
