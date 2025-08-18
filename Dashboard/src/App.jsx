import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import BasketPopup from "./pages/Basket";

import NotificationPopup from "./pages/notification";
import ProfileMenu from "./pages/profileMenu";
import logo from "./components/assets/GrowPaisaLogo.png";

export default function TopNavbar() {
  const [showBasket, setShowBasket] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const basketRef = useRef(null);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        basketRef.current && !basketRef.current.contains(event.target) &&
        notifRef.current && !notifRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target)
      ) {
        setShowBasket(false);
        setShowNotification(false);
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "linear-gradient(to right, #f0fff4, #d4f5e9)",
        fontSize: "0.95rem",
        minHeight: 60,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        
        {/* Profile */}
        <div
          className="d-flex align-items-center me-4 position-relative"
          style={{ cursor: "pointer" }}
          onClick={() => setShowProfile(!showProfile)}
          ref={profileRef}
        >
          <div
            className="rounded-circle text-white d-flex align-items-center justify-content-center me-2"
            style={{
              background: "#198754",
              width: 32,
              height: 32,
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            P
          </div>
          <span className="text-muted fw-semibold">PRX101</span>
          {showProfile && (
            <div
              className="position-absolute"
              style={{ top: "130%", right: 0, zIndex: 10 }}
            >
              <ProfileMenu />
            </div>
          )}
        </div>

        {/* Separator */}
        <span className="mx-2" style={{ borderLeft: "1px solid #ccc", height: 20 }}></span>

        {/* Notification */}
        <div className="me-4 position-relative" ref={notifRef}>
          <i
            className="bi bi-bell-fill text-dark"
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
            onClick={() => setShowNotification(!showNotification)}
          ></i>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.55em" }}
          >
            3
          </span>
          {showNotification && (
            <div
              className="position-absolute"
              style={{ top: "130%", right: 0, zIndex: 10 }}
            >
              <NotificationPopup />
            </div>
          )}
        </div>

        {/* Basket */}
        <div className="me-4 position-relative" ref={basketRef}>
          <i
            className="bi bi-bag-check text-success"
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
            onClick={() => setShowBasket(!showBasket)}
          ></i>
          {showBasket && (
            <div
              className="position-absolute"
              style={{ top: "130%", right: 0, zIndex: 10 }}
            >
              <BasketPopup />
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="d-flex align-items-center position-relative">
          {[
            ["/", "Overview"],
            ["/orders", "Orders"],
            ["/portfolio", "Portfolio"],
            ["/positions", "Positions"],
            ["/bids", "Bids"],
            ["/wallet", "Wallet"]
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`nav-link me-4 ${
                location.pathname === path ? "text-success fw-semibold" : "text-muted"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Market Info */}
          <div className="d-flex align-items-center ms-1 ps-3">
            <div className="me-4 text-muted fw-semibold ms-5">
              <i className="bi bi-graph-up me-1 text-success"></i> NIFTY 50{" "}
              <span className="text-dark fw-bold">25019.80</span>{" "}
              <span className="text-danger">-42.10 (-0.17%)</span>
            </div>
            <div className="text-muted fw-semibold">
              <i className="bi bi-bar-chart me-1 text-success"></i> SENSEX{" "}
              <span className="text-dark fw-bold">82330.59</span>{" "}
              <span className="text-danger">-200.15 (-0.24%)</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
