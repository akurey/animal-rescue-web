import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Rescues from "./components/pages/rescues";
import Login from "./components/pages/login";
import NewAnimal from "./components/pages/newAnimal";
import Animal from "./components/pages/animal";
import PublicLayout from "./components/layout/PublicLayout";
import PrivateLayout from "./components/layout/PrivateLayout";

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
    </Routes>
  </BrowserRouter>
);

export default routes;
