import React from "react";
import "./styles.scss";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../../molecules/NavigationBar";
import ImageBackground from "../../atoms/ImageBackground";

import useAuth from "../../../hooks/auth/useAuth";

function PrivateLayout() {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.login ? (
    <>
      <ImageBackground imageName="Ocelote.png" />
      <NavigationBar />
      <main className="private-layout">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateLayout;
