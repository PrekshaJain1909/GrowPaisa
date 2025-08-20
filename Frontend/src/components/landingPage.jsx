import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mt-5 text-center px-3" style={{ backgroundColor: "#e0f2f1" }}>
        <img
          src="./images/homeHero.png"
          alt="GrowPaisa Hero"
          className="img-fluid mt-5 py-2"
          style={{ borderRadius: "16px", maxHeight: "350px" }}
        />
        <p className="fs-2 fs-md-1 fw-bold text-dark mb-0" style={{ color: "#00695c" }}>
          Grow your wealth with confidence
        </p>
        <p className="fs-6 fs-md-5 text-muted mt-2">
          India's trusted platform to invest in stocks, mutual funds, ETFs, and more.
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
          }}
        >
          Sign up for free
        </Link>
      </div>

      {/* Trust & Features Section */}
      <div style={{ backgroundColor: "#f1f8f6" }}>
        <div className="row mt-5 p-4 p-md-5 align-items-center">
          <div className="col-12 col-md-6 mb-4">
            <p className="fs-3 fw-semibold" style={{ color: "#004d40" }}>
              Trust GrowPaisa
            </p>
            {[
              { title: "Customer-centric always", text: "Over 2 crore users trust GrowPaisa for smart investing with transparency." },
              { title: "Simplicity and clarity", text: "No spam or distractions. Just intuitive tools and insights to help you grow." },
              { title: "Built for you", text: "Our ecosystem is tailored for your financial goals — smart, flexible, and reliable." },
              {
                title: "Empowering Investors",
                text: (
                  <>
                    With tools like{" "}
                    <Link to="/support" className="text-decoration-none" style={{ color: "#00bfa5" }}>
                      Nudge
                    </Link>{" "}
                    and{" "}
                    <Link to="/support" className="text-decoration-none" style={{ color: "#00bfa5" }}>
                      Kill Switch
                    </Link>
                    , GrowPaisa helps you invest wisely.
                  </>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="pt-3">
                <p className="fs-5 fw-semibold" style={{ color: "#00695c" }}>
                  {item.title}
                </p>
                <p className="text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src="./images/ecosystem.png"
              alt="GrowPaisa Ecosystem"
              className="img-fluid"
              style={{ borderRadius: "12px" }}
            />
            <div className="mt-3">
              <Link to="/product" style={{ color: "#00695c" }}>
                Explore our products &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
              <br className="d-md-none" />
              <span className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a href="#" className="text-decoration-none" style={{ color: "#00695c" }}>
                Try Kite demo &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="row justify-content-center align-items-center mb-5 pb-5">
          <div className="col-10 col-md-8 text-center">
            <img src="./images/pressLogos.png" alt="Press Mentions" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div style={{ backgroundColor: "#ffffff" }}>
        <div className="row m-4 m-md-5 text-center text-md-start align-items-center">
          <div className="col-12 col-md-4 mb-4">
            <p className="fs-3 fw-semibold" style={{ color: "#004d40" }}>
              Transparent & unbeatable pricing
            </p>
            <p className="text-muted">
              GrowPaisa brings flat pricing — ₹0 for investing and ₹20 for intraday & F&O.
            </p>
            <Link to="/pricing" className="text-decoration-none" style={{ color: "#00bfa5" }}>
              See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          {[
            { img: "./images/pricing0.svg", text: "Free account opening" },
            { img: "./images/pricing0.svg", text: "Free equity delivery & mutual funds" },
            { img: "./images/intradayTrades.svg", text: "₹20 intraday and F&O trades" },
          ].map((item, idx) => (
            <div key={idx} className="col-12 col-md text-center mb-4">
              <img src={item.img} alt="" style={{ height: "90px" }} />
              <p className="text-muted" style={{ fontSize: "13px" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Varsity Section */}
      <div style={{ backgroundColor: "#f1f8f6" }}>
        <div className="row m-4 m-md-5 align-items-center">
          <div className="col-12 col-md-5 mb-4">
            <img src="./images/education.svg" alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 p-3">
            <p className="fs-3 fw-semibold" style={{ color: "#004d40" }}>
              Learn with GrowPaisa Academy
            </p>
            <p className="text-muted">
              Dive into India's largest stock market education platform — from basics to advanced strategies.
            </p>
            <a href="https://zerodha.com/varsity/" className="text-decoration-none" style={{ color: "#00bfa5" }}>
              Varsity &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
            <p className="text-muted pt-4">
              Join the vibrant community on TradingQ&A for all your questions.
            </p>
            <a href="https://tradingqna.com/" className="text-decoration-none" style={{ color: "#00bfa5" }}>
              TradingQ&A &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-5 text-center mb-5 pt-5 px-3" style={{ backgroundColor: "#e0f2f1" }}>
        <p className="fs-3 fw-semibold mb-4" style={{ color: "#004d40" }}>
          Start your GrowPaisa journey
        </p>
        <p className="fs-6 fs-md-5 text-muted mt-2">
          Modern tools. Zero hidden charges. Transparent investing starts here.
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
          }}
        >
          Sign up for free
        </Link>
      </div>

      <Footer />
    </>
  );
}
