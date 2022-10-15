import React from "react";
import "./styles.scss";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../molecules/NavigationBar";
import ImageBackground from "../../atoms/ImageBackground";

function PrivateLayout() {
  return (
    <>
      <ImageBackground imageName="Ocelote.png" />
      <NavigationBar />
      <main className="private-layout">
        <Outlet />
      </main>
    </>
  );
}

export default PrivateLayout;
