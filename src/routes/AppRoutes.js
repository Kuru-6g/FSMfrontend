import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Supervisor from "../pages/Supervisor";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Supervisor />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
