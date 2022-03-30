import React from "react";
import NavBar from "../components/layout/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { generateRoutes } from "../routes/";

const MainLayout = () => {
  return (
    <>
      <NavBar />

      <Router>
        <Routes>
          {generateRoutes()}
          <Route component={<>404</>} />
        </Routes>
      </Router>
    </>
  );
};

export default MainLayout;
