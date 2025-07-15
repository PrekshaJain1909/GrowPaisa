import React, { useState } from "react";
import Footer from "../footer";

const features = [
  {
    logo: "/images/pricing0.svg",
    heading: "Free Equity Delivery",
    writeup:
      "₹0 brokerage on all equity delivery investments across NSE & BSE — invest long term with zero cost.",
  },
  {
    logo: "/images/intradayTrades.svg",
    heading: "Intraday & F&O Trading",
    writeup:
      "Flat ₹20 or 0.03% per executed intraday trade. Options trades at flat ₹20 per order — no hidden fees.",
  },
  {
    logo: "/images/pricing0.svg",
    heading: "Zero Charges on Direct Mutual Funds",
    writeup:
      "Grow your wealth without commissions — 100% direct mutual fund investments are free on GrowPaisa.",
  },
];

const pricingData = {
  equity: {
    titleRow: ["Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    rows: [
      ["Brokerage", "₹0", "0.03% or ₹20", "0.03% or ₹20", "Flat ₹20"],
      ["STT/CTT", "0.1% on buy & sell", "0.025% on sell", "0.02% on sell", (
        <ul className="mb-0 small">
          <li>0.125% on exercised</li>
          <li>0.1% on sell (premium)</li>
        </ul>
      )],
      ["Transaction charges", "NSE: 0.00297%", "Same", "0.00173%", "0.03503%"],
      ["GST", "18% on charges", "Same", "Same", "Same"],
      ["SEBI charges", "₹10 / crore", "Same", "Same", "Same"],
      ["Stamp charges", "0.015%", "0.003%", "0.002%", "0.003%"],
    ],
  },
  currency: {
    titleRow: ["Currency futures", "Currency options"],
    rows: [
      ["Brokerage", "0.03% or ₹20", "Flat ₹20"],
      ["STT/CTT", "No STT", "No STT"],
      ["GST", "18% on charges", "Same"],
      ["SEBI charges", "₹10 / crore", "Same"],
      ["Stamp charges", "0.0001%", "Same"],
    ],
  },
  commodity: {
    titleRow: ["Commodity futures", "Commodity options"],
    rows: [
      ["Brokerage", "0.03% or ₹20", "Flat ₹20"],
      ["STT/CTT", "0.01% sell (Non-Agri)", "0.05% on sell"],
      ["GST", "18% on charges", "Same"],
      ["SEBI charges", "Agri: ₹1/crore", "₹10 / crore"],
      ["Stamp charges", "0.002%", "0.003%"],
    ],
  },
};

const PricingTable = ({ data }) => (
  <div className="table-responsive">
    <table className="table table-bordered align-middle shadow-sm">
      <thead className="table-success text-dark">
        <tr>
          <th></th>
          {data.titleRow.map((title, idx) => (
            <th key={idx}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, i) => (
          <tr key={i}>
            <td className="fw-semibold text-muted">{row[0]}</td>
            {row.slice(1).map((cell, j) => (
              <td key={j} className="text-muted small">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const GrowPaisaChargesPage = () => {
  const [activeTab, setActiveTab] = useState("equity");
  const renderTable = () => <PricingTable data={pricingData[activeTab]} />;

  return (
    <div className="w-100 min-vh-100 px-0" style={{ backgroundColor: "#f9fefb" }}>
      <div className="container-fluid px-4 py-5">

        {/* Header */}
        <div className="text-center mb-5 mt-5 pt-4">
          <h1 className="fw-bold text-success display-5">GrowPaisa Charges</h1>
          <p className="text-muted fs-5">
            Transparent & fair pricing — here's everything you need to know.
          </p>
        </div>

        {/* Features Section */}
        <div className="row justify-content-center mb-5 px-3">
          {features.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
              key={index}
            >
              <div className="w-100 p-4 shadow-sm rounded bg-white text-center">
                <img
                  src={item.logo}
                  alt={item.heading}
                  style={{ height: "150px", width: "auto" }}
                  className="mb-3"
                />
                <h5 className="text-dark fw-semibold mb-2">{item.heading}</h5>
                <p className="text-muted small">{item.writeup}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-4 border-success">
          {["equity", "currency", "commodity"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link px-4 ${activeTab === tab ? "active fw-bold text-success" : "text-muted"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Table */}
        <div className="mb-5">{renderTable()}</div>

        {/* Call to Action */}
        <p className="text-center fs-5 text-muted mb-5">
          <a href="#" className="text-success fw-semibold text-decoration-none">
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator.
        </p>

        {/* Account Opening Charges */}
        <div className="my-5">
          <h2 className="fw-bold text-success mb-3">Account Opening Charges</h2>
          <div className="table-responsive">
            <table className="table table-bordered align-middle shadow-sm">
              <thead className="table-success text-dark">
                <tr>
                  <th>Type of Account</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online account</td>
                  <td><span className="badge bg-success px-3 py-2">FREE</span></td>
                </tr>
                <tr className="bg-light-subtle">
                  <td>Offline account</td>
                  <td><span className="badge bg-success px-3 py-2">FREE</span></td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>₹ 500</td>
                </tr>
                <tr className="bg-light-subtle">
                  <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Optional Services */}
        <div className="my-5">
          <h2 className="fw-bold text-success mb-3">Optional Value-Added Services</h2>
          <div className="table-responsive">
            <table className="table table-bordered align-middle shadow-sm">
              <thead className="table-success text-dark">
                <tr>
                  <th>Service</th>
                  <th>Billing Frequency</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Annual</td>
                  <td>Free: ₹0 | Pro: ₹249/month or ₹2399/year</td>
                </tr>
                <tr className="bg-light-subtle">
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy & Invest More: ₹100 | SIP: ₹10</td>
                </tr>
                <tr>
                  <td>Kite Connect (API access)</td>
                  <td>Monthly</td>
                  <td>Connect: ₹2000 | Historical API: ₹2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Charges */}
        <div className="row text-muted small">
          <div className="col-md-6">
            <h5 className="text-dark fw-bold mb-3">Charges Explained</h5>
            <p><strong>STT/CTT:</strong> Government tax applicable on transactions.</p>
            <p><strong>Transaction Charges:</strong> Levied by exchanges.</p>
            <p><strong>Call & Trade:</strong> ₹50/order via dealers.</p>
            <p><strong>Stamp Charges:</strong> As per Indian Stamp Act.</p>
            <p><strong>NRI Charges:</strong> ₹100/order F&O, Non-PIS: 0.5%, AMC: ₹500/year.</p>
            <p><strong>Debit Account Trades:</strong> ₹40/order.</p>
            <p><strong>IPFT Charges:</strong> ₹10/crore for equity, ₹50/crore for options.</p>
            <p><strong>MTF Charges:</strong> 0.04%/day interest, ₹30 pledge fee.</p>
          </div>
          <div className="col-md-6">
            <h5 className="text-dark fw-bold mb-3">Other Fees</h5>
            <p><strong>GST:</strong> 18% on all brokerage, SEBI, and exchange fees.</p>
            <p><strong>SEBI:</strong> ₹10/crore for market regulation.</p>
            <p><strong>DP Charges:</strong> ₹15.34/scrip on sale, discounts for women & MF.</p>
            <p><strong>AMC:</strong> ₹0 (BSDA), ₹300/year (non-BSDA).</p>
            <p><strong>Corporate Action:</strong> ₹20 + GST for buybacks via Console.</p>
            <p><strong>Off-market Transfer:</strong> ₹25/transaction.</p>
            <p><strong>Physical CMR:</strong> First free, ₹120 + GST after.</p>
            <p><strong>Payment Gateway:</strong> ₹9 + GST (free via UPI).</p>
            <p><strong>Delayed Payment:</strong> 0.05% daily interest.</p>
            <p><strong>3-in-1 Account:</strong> 0.5% delivery, 0.05% intraday.</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 border-top pt-4">
          <h6 className="text-dark">Disclaimer</h6>
          <p className="text-muted small">
            ₹0 delivery applies to retail clients only. Paper contract notes,
            courier, and physical settlements may incur additional charges.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GrowPaisaChargesPage;
