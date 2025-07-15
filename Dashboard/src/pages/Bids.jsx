import React from "react";

const ipoData = [
  {
    instrument: "KENRIK",
    type: "SME",
    name: "Kenrik Industries",
    date: "29th Apr — 6th May",
    price: "25",
    minAmount: "150000",
    qty: "6000",
    status: "CLOSED",
  },
  {
    instrument: "ARUNAYA",
    type: "SME",
    name: "Arunaya Organics",
    date: "29th Apr — 2nd May",
    price: "55 - 58",
    minAmount: "116000",
    qty: "2000",
    status: "CLOSED",
  },
  {
    instrument: "MANOJJEWEL",
    type: "SME",
    name: "Manoj Jewellers",
    date: "5th — 7th May",
    price: "54",
    minAmount: "108000",
    qty: "2000",
    status: "CLOSED",
  },
  {
    instrument: "SRIGEE",
    type: "SME",
    name: "Srigee DLM",
    date: "5th — 7th May",
    price: "94 - 99",
    minAmount: "118800",
    qty: "1200",
    status: "CLOSED",
  },
  {
    instrument: "VGINFOTECH",
    type: "SME",
    name: "Virtual Galaxy Infotech",
    date: "9th — 14th May",
    price: "135 - 142",
    minAmount: "142000",
    qty: "1000",
    status: "CLOSED",
  },
  {
    instrument: "INTEGRITY",
    type: "SME",
    name: "Integrity Infrabuild Developers",
    date: "13th — 15th May",
    price: "100",
    minAmount: "120000",
    qty: "1200",
    status: "CLOSED",
  },
  {
    instrument: "ACCPL",
    type: "SME",
    name: "Accretion Pharmaceuticals",
    date: "14th — 16th May",
    price: "96 - 101",
    minAmount: "121200",
    qty: "1200",
    status: "CLOSED",
  },
];

export default function Bids() {
  return (
    <div className="container py-4" style={{ backgroundColor: "#f9fbfc", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold" style={{ color: "#198754", fontSize: "1.15rem" }}>
          📈 SME IPOs Snapshot
        </h4>
        <input
          type="text"
          placeholder="Search IPO"
          className="form-control border border-success"
          style={{ maxWidth: 220, fontSize: "0.8rem" }}
        />
      </div>

      {/* Alert/Notice */}
      <div
        className="rounded px-3 py-2 mb-4"
        style={{
          backgroundColor: "#d1e7dd",
          color: "#0f5132",
          fontSize: "0.85rem",
          borderLeft: "4px solid #198754",
        }}
      >
        🚀 New GrowPaisa Marketwatch is live! Now with smarter IPO filters.{" "}
        <a href="#" style={{ color: "#0f5132", textDecoration: "underline" }}>
          Learn more
        </a>
      </div>

      {/* Table */}
      <div className="table-responsive rounded shadow-sm">
        <table className="table table-hover align-middle bg-white border rounded">
          <thead className="table-success">
            <tr style={{ fontSize: "0.82rem", color: "#343a40" }}>
              <th>Instrument</th>
              <th>Date</th>
              <th>Price (₹)</th>
              <th>Min. Investment (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr key={index} style={{ fontSize: "0.83rem" }}>
                <td>
                  <strong className="text-dark" style={{ fontSize: "0.9rem" }}>{ipo.instrument}</strong>
                  <span
                    className="badge bg-secondary ms-2"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {ipo.type}
                  </span>
                  <div className="text-muted" style={{ fontSize: "0.74rem" }}>{ipo.name}</div>
                </td>
                <td>{ipo.date}</td>
                <td>{ipo.price}</td>
                <td>
                  ₹{ipo.minAmount}
                  <div style={{ fontSize: "0.74rem", color: "#666" }}>{ipo.qty} Qty</div>
                </td>
                <td>
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#e2e3e5",
                      color: "#6c757d",
                      fontSize: "0.72rem",
                    }}
                  >
                    {ipo.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
        <a
          href="#"
          className="text-decoration-none"
          style={{
            color: "#198754",
            fontWeight: 500,
            fontSize: "0.85rem",
          }}
        >
          📅 See Upcoming IPOs →
        </a>
      </div>
    </div>
  );
}
