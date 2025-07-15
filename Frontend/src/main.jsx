import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/landingPage.jsx";
import Navbar from "./navbar.jsx";
import AboutMain from "./components/aboutPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./components/pricingPage.jsx";
import Products from "./components/productPage.jsx";
import Support from "./components/SupportPage.jsx";
import SignupPage from "./components/signupPage.jsx";
import Hamburger from "./Hamburger.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<AboutMain />} />
      <Route path="/product" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/hamburger" element={<Hamburger />} />
    </Routes>
  </Router>
);
