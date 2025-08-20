import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navLinks = [
    { name: "Sign Up", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  // Function to close the mobile navbar
  const closeNavbar = () => {
    setIsNavExpanded(false);
    // Also close Bootstrap's collapse if needed
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{
        borderBottom: "1px solid rgba(15, 61, 46, 0.08)",
        padding: "0.6rem 0",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeNavbar}>
          <img
            src="images/growpaisaLogo.png"
            alt="GrowPaisa Logo"
            style={{ height: "42px", marginLeft: "20px" }}
            className="transition-all"
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
          style={{ width: "42px", height: "42px" }}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={link.path}
                  className={`nav-link position-relative mx-2 mx-xl-3 px-2 py-3 ${
                    location.pathname === link.path
                      ? "active-link text-success fw-semibold"
                      : "text-dark-hover"
                  } ${link.highlight ? "highlight-link" : ""}`}
                  style={{
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                  onClick={closeNavbar}
                >
                  {link.name}
                  {location.pathname === link.path && !link.highlight && (
                    <span
                      className="position-absolute bottom-0 start-0 w-100 bg-success"
                      style={{ height: "2px", borderRadius: "2px" }}
                    ></span>
                  )}
                </Link>
              </li>
            ))}

            {/* Hamburger Menu (extra actions) */}
            <li className="nav-item ps-lg-3 mt-2 mt-lg-0">
              <HamburgerMenu />
            </li>
          </ul>
        </div>
      </div>

      {/* Improved Custom Styling */}
      <style>{`
        /* Smooth transition logo */
        .transition-all {
          transition: all 0.3s ease;
        }
        .transition-all:hover {
          transform: scale(1.08);
        }

        /* Base nav link styles */
        .navbar-nav .nav-link {
          color: #3b444b !important;
          font-weight: 500;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          position: relative;
          letter-spacing: 0.02em;
          padding: 0.5rem 1rem !important;
          transition: color 0.3s, background-color 0.3s;
        }

        /* Hover and active states */
        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.text-success {
          color: #0f3d2e !important;
        }

        /* Animated underline on hover and active */
        .navbar-nav .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, #0f3d2e, #1a5c41);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .navbar-nav .nav-link:hover::after,
        .navbar-nav .nav-link.text-success::after {
          width: 100%;
        }

        /* Highlight (CTA) button */
        .highlight-link {
          background: linear-gradient(135deg, #0f3d2e, #1a5c41);
          color: #fff !important;
          border-radius: 24px;
          font-weight: 600;
          padding: 0.55rem 1.35rem !important;
          margin: 0 0.5rem;
          box-shadow: 0 4px 10px rgb(15 61 46 / 0.15);
          transition: all 0.35s ease;
          display: inline-block;
        }
        .highlight-link:hover {
          background: linear-gradient(135deg, #1a5c41, #0f3d2e);
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 6px 16px rgb(15 61 46 / 0.25);
        }

        /* Mobile menu styles */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.95);
            padding: 1rem 1.4rem;
            border-radius: 14px;
            box-shadow: 0 12px 30px rgb(0 0 0 / 0.1);
            margin-top: 0.6rem;
            backdrop-filter: saturate(180%) blur(10px);
            animation: fadeDown 0.35s ease forwards;
          }

          .nav-link {
            display: block;
            font-size: 1.1rem !important;
            font-weight: 600 !important;
            margin: 0.3rem 0 !important;
            padding: 0.8rem 1rem !important;
            border-radius: 10px;
          }

          .nav-link:hover {
            background-color: rgba(15, 61, 46, 0.1);
          }

          .highlight-link {
            display: block;
            width: 100% !important;
            margin: 0.7rem 0;
            text-align: center;
          }
        }

        /* Animation */
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}