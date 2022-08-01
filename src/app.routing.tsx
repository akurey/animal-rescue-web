import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Rescues from "./components/pages/rescues";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rescues" element={<Rescues />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
