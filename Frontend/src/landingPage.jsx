import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* Invest Section */}
      <div className="mt-5 text-center" style={{ backgroundColor: "#e0f2f1" }}>
        <img
          src="./images/homeHero.png"
          alt="GrowPaisa Hero"
          className="mt-5 py-2 px-4"
          style={{ height: "320px", width: "720px", borderRadius: "16px" }}
        />
        <p className="fs-1 fw-bold text-dark mb-0" style={{ color: "#00695c" }}>
          Grow your wealth with confidence
        </p>
        <p className="fs-5 text-muted mt-2">
          India's trusted platform to invest in stocks, mutual funds, ETFs, and
          more.
        </p>
        <Link
          to="/signup"
          className="btn btn-lg mt-4 mb-5"
          style={{
            backgroundColor: "#00bfa5",
            border: "none",
            color: "#ffffff",
            padding: "10px 30px",
            borderRadius: "8px",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          Sign up for free
        </Link>
      </div>

      {/* Trust & Features Section */}
      <div style={{ backgroundColor: "#f1f8f6" }}>
        <div className="row mt-5 p-5">
          <div className="col-5 ps-5">
            <p className="fs-2 fw-semibold" style={{ color: "#004d40" }}>
              Trust GrowPaisa
            </p>
            <div className="pt-4">
              <p className="fs-4 fw-semibold" style={{ color: "#00695c" }}>
                Customer-centric always
              </p>
              <p className="text-secondary">
                Over 2 crore users trust GrowPaisa for smart investing with
                transparency.
              </p>
            </div>
            <div className="pt-3">
              <p className="fs-4 fw-semibold" style={{ color: "#00695c" }}>
                Simplicity and clarity
              </p>
              <p className="text-secondary">
                No spam or distractions. Just intuitive tools and insights to
                help you grow.
              </p>
            </div>
            <div className="pt-3">
              <p className="fs-4 fw-semibold" style={{ color: "#00695c" }}>
                Built for you
              </p>
              <p className="text-secondary">
                Our ecosystem is tailored for your financial goals — smart,
                flexible, and reliable.
              </p>
            </div>
            <div className="pt-3">
              <p className="fs-4 fw-semibold" style={{ color: "#00695c" }}>
                Empowering Investors
              </p>
              <p className="text-secondary">
                With tools like{" "}
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#00bfa5" }}
                >
                  Nudge
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#00bfa5" }}
                >
                  Kill Switch
                </a>
                , GrowPaisa helps you invest wisely.
              </p>
            </div>
          </div>
          <div className="col ms-5">
            <img
              src="./images/ecosystem.png"
              alt="GrowPaisa Ecosystem"
              className="img-fluid"
              style={{ height: "500px", borderRadius: "12px" }}
            />
            <div className="ms-5 ps-5 m-4">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#00695c" }}
              >
                Explore our products &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#00695c" }}
              >
                Try Kite demo &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center mb-5 pb-5">
          <img
            src="./images/pressLogos.png"
            alt="Press Mentions"
            style={{ height: "50px", width: "900px" }}
          />
        </div>
      </div>

      {/* Unbeatable Pricing */}
      <div style={{ backgroundColor: "#ffffff" }}>
        <div className="row m-5">
          <div className="col-4">
            <p className="fs-2 fw-semibold" style={{ color: "#004d40" }}>
              Transparent & unbeatable pricing
            </p>
            <p className="text-muted">
              GrowPaisa brings flat pricing — ₹0 for investing and ₹20 for
              intraday & F&O.
            </p>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "#00bfa5" }}
            >
              See pricing &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col text-center">
            <img
              src="./images/pricing0.svg"
              alt=""
              style={{ height: "90px" }}
            />
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Free account opening
            </p>
          </div>
          <div className="col text-center">
            <img
              src="./images/pricing0.svg"
              alt=""
              style={{ height: "90px" }}
            />
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Free equity delivery & mutual funds
            </p>
          </div>
          <div className="col text-center">
            <img
              src="./images/intradayTrades.svg"
              alt=""
              style={{ height: "90px" }}
            />
            <p className="text-muted" style={{ fontSize: "13px" }}>
              ₹20 intraday and F&O trades
            </p>
          </div>
        </div>
      </div>

      {/* Varsity Section */}
      <div style={{ backgroundColor: "#f1f8f6" }}>
        <div className="row m-5 align-items-center">
          <div className="col-4 me-5">
            <img src="./images/education.svg" alt="" className="img-fluid" />
          </div>
          <div className="col-1"></div>
          <div className="col-6 p-4">
            <p className="fs-2 fw-semibold" style={{ color: "#004d40" }}>
              Learn with GrowPaisa Academy
            </p>
            <p className="text-muted">
              Dive into India's largest stock market education platform — from
              basics to advanced strategies.
            </p>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "#00bfa5" }}
            >
              Varsity &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <p className="text-muted pt-4">
              Join the vibrant community on TradingQ&A for all your questions.
            </p>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "#00bfa5" }}
            >
              TradingQ&A &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Open Account Section */}
      <div
        className="mt-5 text-center mb-5 pt-5"
        style={{ backgroundColor: "#e0f2f1" }}
      >
        <p className="fs-2 fw-semibold mb-4" style={{ color: "#004d40" }}>
          Start your GrowPaisa journey
        </p>
        <p className="fs-5 text-muted mt-2">
          Modern tools. Zero hidden charges. Transparent investing starts here.
        </p>
        <Link to="/signup" className="btn btn-success btn-lg">Sign up for free</Link>
        <Link
          to="/signup"
          className="btn btn-lg mt-4 mb-5"
          style={{
            backgroundColor: "#00bfa5",
            border: "none",
            color: "#ffffff",
            padding: "10px 30px",
            borderRadius: "8px",
            fontSize: "18px",
            textDecoration: "none",
          }}
        >
          Sign up for free
        </Link>
      </div>
    </>
  );
}
