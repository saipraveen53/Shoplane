import React from "react";
import ShoplaneNavbar from "./ShoplaneNavbar";
import ShoplaneLandingPage from "./ShoplaneLandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPage from "./ItemPage";
import ShoplaneCart from "./ShoplaneCart";
import ShoplaneFooter from "./ShoplaneFooter";

const ShoplaneApp = () => {
  return (
    <div>
      <Router>
        <ShoplaneNavbar />
        <Routes>
          <Route path="/" element={<ShoplaneLandingPage />} />
          <Route path="/itempage/:id" element={<ItemPage />} />
          <Route path="/cart" element={<ShoplaneCart />} />
        </Routes>
        <ShoplaneFooter />
      </Router>
    </div>
  );
};

export default ShoplaneApp;
