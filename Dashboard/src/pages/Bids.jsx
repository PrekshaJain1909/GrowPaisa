import React, { useEffect, useState } from "react";

export default function Bids() {
  const [bids, setBids] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch bids from backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/bids")
      .then((res) => res.json())
      .then((data) => setBids(data))
      .catch((err) => console.error("Failed to fetch bids", err));
  }, []);

  // Filter bids by symbol or other fields based on search
  const filteredBids = bids.filter((bid) =>
    bid.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="container py-4"
      style={{ backgroundColor: "#f9fbfc", fontFamily: "'Segoe UI', sans-serif" }}
    >
      {/* Header and search */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold" style={{ color: "#198754", fontSize: "1.15rem" }}>
          📋 Pending Bids (Limit Orders)
        </h4>
        <input
          type="text"
          placeholder="Search by Stock Symbol"
          className="form-control border border-success"
          style={{ maxWidth: 220, fontSize: "0.8rem" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="table-responsive rounded shadow-sm">
        <table className="table table-hover align-middle bg-white border rounded">
          <thead className="table-success">
            <tr style={{ fontSize: "0.82rem", color: "#343a40" }}>
              <th>Stock Symbol</th>
              <th>Bid Price (₹)</th>
              <th>Quantity</th>
              <th>Matched?</th>
            </tr>
          </thead>
          <tbody>
            {filteredBids.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", fontSize: "0.9rem", color: "#6c757d" }}>
                  No bids found
                </td>
              </tr>
            ) : (
              filteredBids.map((bid) => (
                <tr key={bid._id} style={{ fontSize: "0.83rem" }}>
                  <td><strong>{bid.symbol}</strong></td>
                  <td>₹{bid.bidPrice.toFixed(2)}</td>
                  <td>{bid.quantity}</td>
                  <td>
                    {bid.isMatched ? (
                      <span className="badge bg-success">Yes</span>
                    ) : (
                      <span className="badge bg-warning text-dark">No</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
