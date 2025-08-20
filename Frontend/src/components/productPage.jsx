import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";

// ✅ Header Section
const First = () => (
  <div className="w-100 bg-light py-5 border-bottom mt-5">
    <div className="container d-flex flex-column justify-content-center align-items-center text-center px-3">
      <p className="fs-1 fw-semibold mb-3 text-success">GrowPaisa Products</p>
      <p className="fs-4 text-muted">
        Modern, intuitive, and accessible investment platforms
      </p>
      <p className="fs-5 text-muted">
        Learn more about our{" "}
        <Link to="/about" style={{ color: "#00bfa5" }}>
          investment offerings →
        </Link>
      </p>
    </div>
  </div>
);

// ✅ Left Image + Text Block
const SecondLeft = ({ imageURL, Productname, Link }) => (
  <div className="container my-5 py-5 bg-white rounded-4 shadow-sm">
    <div className="row px-3 px-md-5 align-items-center">
      <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
        <img src={imageURL} alt="" className="img-fluid w-100" style={{ maxWidth: "420px" }} />
      </div>
      <div className="col-12 col-md-6 text-dark">
        <p className="fs-2 fw-bold text-success">{Productname.heading}</p>
        <p className="text-muted">{Productname.writeup}</p>
        <p>
          {Link.map((i, index) => (
            <a
              href="#"
              key={index}
              className="me-4 d-inline-block mb-2"
              style={{ color: "#00bfa5" }}
            >
              {i} →
            </a>
          ))}
        </p>
        <div className="d-flex flex-wrap gap-3">
          <button className="btn btn-dark d-flex align-items-center">
            <i className="fa-brands fa-google-play me-2 fs-5"></i>
            <div className="text-start">
              <p className="m-0 small">GET IT ON</p>
              <p className="m-0">Google Play</p>
            </div>
          </button>
          <button className="btn btn-dark d-flex align-items-center">
            <i className="fa-brands fa-apple me-2 fs-5"></i>
            <div className="text-start">
              <p className="m-0 small">Download On the</p>
              <p className="m-0">App Store</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ✅ Right Text + Image Block
const SecondRight = ({ imageURL, Productname, Link }) => (
  <div className="container my-5 py-5 bg-white rounded-4 shadow-sm">
    <div className="row px-3 px-md-5 align-items-center">
      <div className="col-12 col-md-6 text-dark mb-4 mb-md-0">
        <p className="fs-2 fw-bold text-success">{Productname.heading}</p>
        <p className="text-muted">{Productname.writeup}</p>
        <p>
          {Link.map((i, index) => (
            <a
              href="#"
              key={index}
              className="me-4 d-inline-block mb-2"
              style={{ color: "#00bfa5" }}
            >
              {i} →
            </a>
          ))}
        </p>
      </div>
      <div className="col-12 col-md-6 text-center">
        <img src={imageURL} alt="" className="img-fluid w-100" style={{ maxWidth: "420px" }} />
      </div>
    </div>
  </div>
);

// ✅ Tech Info Section
const Third = () => (
  <div className="w-100 text-center my-5 py-5 bg-success text-white px-3">
    <p className="fs-6 fs-md-5">
      Want to know more about our technology stack? Check out the{" "}
      <a href="#" className="text-white fw-bold">
        GrowPaisa.tech
      </a>{" "}
      blog.
    </p>
    <p className="fs-4 fs-md-3 fw-semibold mt-4">The GrowPaisa Ecosystem</p>
    <p className="fs-6">Extend your investment experience further with our trusted platforms</p>
  </div>
);

// ✅ Partner Card
const Fourth = ({ logo, writeup }) => (
  <div
    className="bg-light p-3 rounded shadow-sm m-3 d-flex flex-column justify-content-center align-items-center text-center"
    style={{ minHeight: "230px", maxWidth: "300px", flex: "1" }}
  >
    <img src={logo} alt="" className="mb-3 img-fluid" style={{ maxHeight: "80px" }} />
    <p className="text-muted small">{writeup}</p>
  </div>
);

// ✅ Partner Section
const FourthMain = () => {
  const partners = [
    { logo: "./images/zerodhaFundhouse.png", writeup: "Simple and transparent index funds to help you save for your goals." },
    { logo: "./images/sensibullLogo.svg", writeup: "Powerful options analytics platform for strategy and trade analysis." },
    { logo: "./images/streakLogo.png", writeup: "Create and backtest strategies without coding." },
    { logo: "./images/goldenpiLogo.png", writeup: "Invest in curated baskets of stocks for long-term growth." },
    { logo: "./images/dittoLogo.png", writeup: "Expert advice on life and health insurance." },
  ];

  return (
    <div className="container my-5 py-5">
      <div className="d-flex flex-wrap justify-content-center">
        {partners.map((item, idx) => (
          <Fourth key={idx} {...item} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/signup" className="btn btn-success btn-lg">
          Sign up for free
        </Link>
      </div>
    </div>
  );
};

// ✅ Main Page Component
const GrowPaisaShowcase = () => {
  const sections = [
    { image: "./images/kite.png", name: { heading: "GrowPaisa Platform", writeup: "A sleek, fast and reliable investment platform for all levels of investors." }, links: ["Try demo", "Learn more"], isLeft: true },
    { image: "./images/console.png", name: { heading: "Analytics Dashboard", writeup: "Gain deep insights into your investment performance." }, links: ["Explore"] },
    { image: "./images/coin.png", name: { heading: "Direct Mutual Funds", writeup: "Invest commission-free in direct mutual funds." }, links: ["Get started"] },
    { image: "./images/kiteconnect.png", name: { heading: "GrowPaisa APIs", writeup: "Build your own investment experience with simple APIs." }, links: ["API Docs"] },
    { image: "./images/varsity.png", name: { heading: "GrowPaisa Learn", writeup: "Bite-sized lessons on everything investing, available on mobile." }, links: [] }
  ];

  return (
    <div className="w-100 overflow-hidden">
      <First />
      {sections.map((sec, idx) =>
        sec.isLeft || idx % 2 === 0 ? (
          <SecondLeft key={idx} imageURL={sec.image} Productname={sec.name} Link={sec.links} />
        ) : (
          <SecondRight key={idx} imageURL={sec.image} Productname={sec.name} Link={sec.links} />
        )
      )}
      <Third />
      <FourthMain />
      <Footer />
    </div>
  );
};

export default GrowPaisaShowcase;
