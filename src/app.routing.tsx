import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rescues from "./components/pages/rescues";
import Login from "./components/pages/login";
import NewAnimal from "./components/pages/newAnimal";
import Animal from "./components/pages/animal";
import PublicLayout from "./components/layout/PublicLayout";
import PrivateLayout from "./components/layout/PrivateLayout";
import NotFound from "./components/pages/404";
import {
  HOME_ROUTE,
  RESCUE_EDIT_ROUTE,
  RESCUE_NEW_ROUTE,
  RESCUE_ROUTE,
  RESCUE_VIEW_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
} from "./constants/routes.types";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path={LOGIN_ROUTE} element={<Login />} />
      </Route>

      <Route element={<PrivateLayout />}>
        <Route path={HOME_ROUTE} element={<Rescues />} />
        <Route path={RESCUE_ROUTE} element={<Rescues />} />
        <Route path={RESCUE_NEW_ROUTE} element={<NewAnimal />} />
        <Route path={RESCUE_EDIT_ROUTE} element={<NewAnimal />} />
        <Route path={RESCUE_VIEW_ROUTE} element={<Animal />} />
      </Route>

      {/* 404 Page, is always at the end */}
      <Route element={<PublicLayout />}>
        <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />{" "}
        {/* Solo para fines de Testing */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default routes;
