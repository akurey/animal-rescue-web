import React from "react";
import "./styles.scss";
import { Outlet } from "react-router-dom";
import ImageBackground from "../../atoms/ImageBackground";

function PublicLayout() {
  return (
    <>
      <ImageBackground />
      <main className="public-layout">
        <Outlet />
      </main>
    </>
  );
}

export default PublicLayout;
