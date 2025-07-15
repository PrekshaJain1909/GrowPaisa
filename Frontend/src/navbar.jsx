import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./Hamburger";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Sign Up", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm border-bottom ">
      <div className="container-fluid px-4 ">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="images/growpaisaLogo.png"
            alt="GrowPaisa Logo"
            style={{ height: "50px", marginLeft: "40px" }}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link, index) => (
              <li className="nav-item px-3" key={index}>
                <Link
                  to={link.path}
                  className={`nav-link fw-medium ${
                    location.pathname === link.path ? "text-success" : "text-dark"
                  }`}
                  style={{
                    fontSize: "15px",
                    transition: "color 0.3s",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Hamburger on right */}
            <li className="nav-item ps-4 pe-3">
              <HamburgerMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
