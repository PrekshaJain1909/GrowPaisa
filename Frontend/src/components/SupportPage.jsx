import React from "react";

// ✅ Reusable Support Card component
const SupportCard = ({ logo, heading, list }) => {
  return (
    <div
      className="p-3 p-md-4 rounded-4 shadow-sm h-100"
      style={{
        backgroundColor: "#f0fff4",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <p className="fw-semibold fs-5 text-success mb-3">
        <i className={`${logo} me-2`}></i>
        {heading}
      </p>
      <ul className="list-unstyled ms-1">
        {list.map((element, index) => (
          <li key={index} className="mt-2">
            <a href="#" className="text-decoration-none text-dark small">
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
    <div className="support-page">
      {/* ✅ Hero Section */}
      <div className="mt-5 p-0">
        <div
          className="container-fluid bg-success bg-gradient text-light"
          style={{ minHeight: "60vh", width: "100%" }}
        >
          <div className="row px-3 px-md-5 pt-4 pt-md-5">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="mb-3 mb-md-4">Support Portal</h3>
              <p className="fs-5 mb-4 mb-md-5">
                Search for an answer or browse help topics to create a ticket
              </p>

              {/* Responsive, styled Search Bar */}
              <div className="search-bar-wrapper mb-4">
                <div className="input-group search-bar">
                  <input
                    type="text"
                    className="form-control border-0 shadow-sm py-2 px-3 rounded-start"
                    style={{ background: "#fff", minWidth: 0 }}
                    id="search"
                    placeholder="Eg: how to activate F&O, why is my order getting rejected..."
                    aria-label="Search field"
                  />
                  <button
                    className="btn btn-success d-flex align-items-center px-4 rounded-end"
                    style={{
                      background: "linear-gradient(90deg,#38d996 0,#2ecc71 100%)",
                      border: "none",
                    }}
                  >
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                  </button>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mb-3">
                <a href="#" className="text-white text-decoration-underline">
                  Track account opening
                </a>
                <a href="#" className="text-white text-decoration-underline">
                  Track segment activation
                </a>
              </div>
              <div className="d-flex flex-wrap gap-3">
                <a href="#" className="text-white text-decoration-underline">
                  Intraday margins
                </a>
                <a href="#" className="text-white text-decoration-underline">
                  Kite user manual
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="text-end mb-4 mb-md-5">
                <a href="#" className="text-white text-decoration-underline">
                  Track tickets
                </a>
              </div>
              <h5 className="mb-3">Featured</h5>
              <ol className="ps-3">
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
      <div className="container mt-4 mt-md-5">
        <p className="fs-5 text-muted mb-4 mb-md-5 text-center text-md-start">
          To create a ticket, select a relevant topic
        </p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map((item, idx) => (
            <div className="col" key={idx}>
              <SupportCard logo={item.logo} heading={item.heading} list={item.list} />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer */}
      <div
        className="container-fluid mt-5 py-5 px-3 px-md-5"
        style={{
          background: "#0f3d2e",
          color: "white",
        }}
      >
        <div className="row">
          {/* Logo + Social */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold">GrowPaisa</h5>
            <p className="text-white mb-2">© 2010 - 2025, GrowPaisa Ventures</p>
            <p className="text-white mb-3">All rights reserved.</p>
            <div className="d-flex gap-3">
              <a href="#"><i className="fa-brands fa-x-twitter text-white fs-5"></i></a>
              <a href="#"><i className="fa-brands fa-facebook text-white fs-5"></i></a>
              <a href="#"><i className="fa-brands fa-instagram text-white fs-5"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin text-white fs-5"></i></a>
            </div>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled mt-3">
              {[
                "About", "Products", "Pricing", "Referral programme", "Careers",
                "GrowPaisa.tech", "Open source", "Media", "CSR"
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="text-white text-decoration-none small">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled mt-3">
              {[
                "Contact us", "Support portal", "Z-Connect blog", "List of charges",
                "Downloads & resources", "Market overview", "File a complaint", "Complaint status"
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="text-white text-decoration-none small">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">Open an account</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none small">Fund transfer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Improved Search Bar and Mobile Experience */}
      <style jsx>{`
        /* Search bar improvements */
        .search-bar input::placeholder {
          color: #999 !important;
          opacity: 1;
        }
        .search-bar input:focus {
          box-shadow: 0 0 0 2px #37c96433 !important;
          outline: none;
          background: #fff;
        }
        .search-bar .btn:focus {
          box-shadow: 0 0 0 2px #38d99633 !important;
          outline: none;
        }
        @media (max-width: 768px) {
          .search-bar {
            flex-direction: column;
            gap: 0.75rem;
            box-shadow: none;
          }
          .search-bar .form-control,
          .search-bar .btn {
            border-radius: 0.5rem !important;
            width: 100%;
            min-width: unset;
          }
          .search-bar .btn {
            margin-left: 0 !important;
            margin-top: -4px;
          }
        }
      `}</style>
    </div>
  );
};

export default SupportMain;
