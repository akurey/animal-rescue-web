import React from "react";
import "./styles.scss";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <main className="layout">
      <Outlet />
    </main>
  );
}

export default PublicLayout;
