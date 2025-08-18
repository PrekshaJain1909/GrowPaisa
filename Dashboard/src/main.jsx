import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Orders from "./pages/Orders";
import Portfolio from "./pages/Portfolio";
import Positions from "./pages/Position";
import Bids from "./pages/Bids";
import Wallet from "./pages/Wallet";
import Overview from "./pages/Overview";
import GrowwLogin from "./components/signUp";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="orders" element={<Orders />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="positions" element={<Positions />} />
        <Route path="bids" element={<Bids />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="signup" element={<GrowwLogin />} />
      </Route>
    </Routes>
  </Router>
);
