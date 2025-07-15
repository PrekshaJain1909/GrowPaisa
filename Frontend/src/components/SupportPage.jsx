import React from "react";

// ✅ Reusable Support Card component
const SupportCard = ({ logo, heading, list }) => {
  return (
    <div
      className="p-4 rounded-4 shadow-sm"
      style={{
        backgroundColor: "#f0fff4", // light green background
        transition: "transform 0.3s ease",
      }}
    >
      <p className="fw-semibold fs-5 text-white">
        <i className={`${logo} me-2`}></i>
        {heading}
      </p>
      <ul className="list-unstyled ms-1 mt-3">
        {list.map((element, index) => (
          <li key={index} className="mt-2">
            <a href="#" className="text-decoration-none text-dark">
              {element}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Main Support Page
const SupportMain = () => {
  const data = [
    {
      logo: "fa-solid fa-plus",
      heading: "Account Opening",
      list: [
        "Getting started",
        "Online",
        "Offline",
        "Charges",
        "Company, Partnership and HUF",
        "Non Resident Indian (NRI)",
      ],
    },
    {
      logo: "fa-solid fa-user",
      heading: "Your GrowPaisa Account",
      list: [
        "Login credentials",
        "Your Profile",
        "Account modification and segment addition",
        "CMR & DP ID",
        "Nomination",
        "Transfer and conversion of shares",
      ],
    },
    {
      logo: "fa-solid fa-arrow-trend-up",
      heading: "Trading and Markets",
      list: [
        "Trading FAQs",
        "Kite",
        "Margins",
        "Product and order types",
        "Corporate actions",
        "Kite features",
      ],
    },
    {
      logo: "fa-solid fa-envelope",
      heading: "Funds",
      list: [
        "Fund withdrawal",
        "Adding funds",
        "Adding bank accounts",
        "eMandates",
      ],
    },
    {
      logo: "fa-solid fa-terminal",
      heading: "Console",
      list: [
        "IPO",
        "Portfolio",
        "Funds statement",
        "Profile",
        "Reports",
        "Referral program",
      ],
    },
    {
      logo: "fa-solid fa-bitcoin",
      heading: "Coin",
      list: [
        "Understanding mutual funds and Coin",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)",
      ],
    },
  ];

  return (
    <div>
      {/* ✅ Hero Section */}
      <div className="mt-5 p-0">
        <div
          className="container-fluid bg-success bg-gradient text-light"
          style={{ minHeight: "84vh", width: "100vw" }}
        >
          <div className="row px-5 pt-5">
            <div className="col-md-6">
              <h3 className="mb-4">Support Portal</h3>
              <p className="fs-5 mb-5">
                Search for an answer or browse help topics to create a ticket
              </p>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  placeholder="Eg: how to activate F&O, why is my order getting rejected..."
                  aria-label="Search field"
                />
                <span className="input-group-text bg-white">
                  <i className="fa-solid fa-magnifying-glass text-white"></i>
                </span>
              </div>
              <div>
                <a href="#" className="text-white text-decoration-underline me-4">
                  Track account opening
                </a>
                <a href="#" className="text-white text-decoration-underline">
                  Track segment activation
                </a>
              </div>
              <div className="mt-3">
                <a href="#" className="text-white text-decoration-underline me-4">
                  Intraday margins
                </a>
                <a href="#" className="text-white text-decoration-underline">
                  Kite user manual
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="text-end mb-5">
                <a href="#" className="text-white text-decoration-underline">
                  Track tickets
                </a>
              </div>
              <h5 className="ms-5">Featured</h5>
              <ol className="ms-5 ps-3">
                <li className="mb-2">
                  <a href="#" className="text-white text-decoration-underline">
                    Current Takeovers and Delisting - February 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-underline">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Categories */}
      <p className="fs-5 text-muted m-5 ps-5">
        To create a ticket, select a relevant topic
      </p>
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item, idx) => (
            <div className="col" key={idx}>
              <SupportCard logo={item.logo} heading={item.heading} list={item.list} />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer */}
      {/* ✅ Footer */}
<div
  className="container-fluid mt-5 py-5 px-5"
  style={{
    background: "#0f3d2e",
    color: "white",
  }}
>
  <div className="row">
    {/* Logo + Social */}
    <div className="col-md-3 mb-4">
      <h5 className="fw-bold">GrowPaisa</h5>
      <p className="text-white">© 2010 - 2025, GrowPaisa Ventures</p>
      <p className="text-white">All rights reserved.</p>
      <div className="d-flex gap-3">
        <a href="#"><i className="fa-brands fa-x-twitter text-white fs-5"></i></a>
        <a href="#"><i className="fa-brands fa-facebook text-white fs-5"></i></a>
        <a href="#"><i className="fa-brands fa-instagram text-white fs-5"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin text-white fs-5"></i></a>
      </div>
    </div>

    {/* Company */}
    <div className="col-md-3">
      <h6 className="fw-bold">Company</h6>
      <ul className="list-unstyled mt-3">
        {[
          "About", "Products", "Pricing", "Referral programme", "Careers",
          "GrowPaisa.tech", "Open source", "Media", "CSR"
        ].map((item, idx) => (
          <li key={idx} className="mb-2">
            <a href="#" className="text-white text-decoration-none">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Support */}
    <div className="col-md-3">
      <h6 className="fw-bold">Support</h6>
      <ul className="list-unstyled mt-3">
        {[
          "Contact us", "Support portal", "Z-Connect blog", "List of charges",
          "Downloads & resources", "Market overview", "File a complaint", "Complaint status"
        ].map((item, idx) => (
          <li key={idx} className="mb-2">
            <a href="#" className="text-white text-decoration-none">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Account */}
    <div className="col-md-3">
      <h6 className="fw-bold">Account</h6>
      <ul className="list-unstyled mt-3">
        <li className="mb-2">
          <a href="#" className="text-white text-decoration-none">Open an account</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-white text-decoration-none">Fund transfer</a>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default SupportMain;
