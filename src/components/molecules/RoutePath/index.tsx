import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

// interface IRoutePath {
//   route: string;
//   displayName: string;
// }

function RoutePath() {
  const [paths, setPaths] = useState([
    { id: 0, route: "/menu", displayName: "menú principal" },
    {
      id: 1,
      route: "/menu/newAnimal",
      displayName: "administrar animales recatados",
    },
  ]);

  // const addPath = (path: IRoutePath) => {
  //   const newPath = { id: paths.length, ...path };
  //   setPaths((oldPaths) => {
  //     return [...oldPaths, newPath];
  //   });
  // };

  return (
    <>
      {false && setPaths([]) /*  Delete  */}
      <div className="route-path">
        {paths.map((path) => {
          return (
            <>
              <Link key={path.id} to={path.route} className="link">
                {path.displayName}
              </Link>
              {path !== paths[paths.length - 1] && (
                <div className="separator">/</div>
              )}
            </>
          );
        })}
      </div>
      {/* <Outlet /> */}
    </>
  );
}

export default RoutePath;
