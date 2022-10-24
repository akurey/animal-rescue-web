import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Rescues from "./components/pages/rescues";
import Login from "./components/pages/login";
import NewAnimal from "./components/pages/newAnimal";
import Animal from "./components/pages/animal";
import PublicLayout from "./components/layout/PublicLayout";
import PrivateLayout from "./components/layout/PrivateLayout";
import NotFound from "./components/pages/404";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateLayout />}>
        <Route path="/rescues" element={<Rescues />} />
        <Route path="/rescues/new" element={<NewAnimal />} />
        <Route path="/rescues/:animalId" element={<Animal />} />
      </Route>

      {/* 404 Page, is always at the end */}
      <Route element={<PublicLayout />}>
        <Route path="/404" element={<NotFound />} />{" "}
        {/* Solo para fines de Testing */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default routes;
