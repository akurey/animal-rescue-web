import React, { useEffect } from "react";
import "./styles.scss";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../../molecules/NavigationBar";
import ImageBackground from "../../atoms/ImageBackground";

import useAuth from "../../../hooks/auth/useAuth";
import { LocalStorageKeys } from "../../../constants/local-storage-keys.constant";
import AppSessionService from "../../../services/storage/session.service";
import AppStorageService from "../../../services/storage/storage.service";

function PrivateLayout() {
  const { setAuth } = useAuth();
  const location = useLocation();
  const storageService = new AppStorageService();
  const sessionService = new AppSessionService();
  // eslint-disable-next-line
  const user = storageService.getItem(LocalStorageKeys.USER)
    ? JSON.parse(storageService.getItem(LocalStorageKeys.USER))
    : sessionService.getItem(LocalStorageKeys.USER)
    ? JSON.parse(sessionService.getItem(LocalStorageKeys.USER))
    : undefined;

  const context: any = user;
  useEffect(() => {
    setAuth({ auth: context });
  }, []);

  return context ? (
    <>
      <ImageBackground />
      <NavigationBar />
      <main className="private-layout">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default PrivateLayout;
