import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Rescues from "./components/pages/rescues";
import Login from "./components/pages/login";
import NewAnimal from "./components/pages/newAnimal";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rescues" element={<Rescues />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rescues/new" element={<NewAnimal />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
