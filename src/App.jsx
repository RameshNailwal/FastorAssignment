import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LoginAuth from "./components/LoginAuth";
import DashBoard from "./components/DashBoard";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loginauth" element={<LoginAuth />} />

        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
