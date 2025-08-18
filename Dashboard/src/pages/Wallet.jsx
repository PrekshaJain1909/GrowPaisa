import React, { useEffect, useState } from "react";

export default function FundsDashboard() {
  const [wallet, setWallet] = useState({
    availableCash: 0,
    fundsAdded: 0,
    fundsWithdrawn: 0,
    transactions: [],
  });

  // API URLs without portfolioHoldings
  const apiEndpoints = {
    bids: "https://growpaisa.onrender.com/api/bids",
    holdings: "https://growpaisa.onrender.com/api/holdings",
    orders: "https://growpaisa.onrender.com/api/orders",
    positions: "https://growpaisa.onrender.com/api/positions",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [bidsRes, holdingsRes, ordersRes, positionsRes] = await Promise.all([
          fetch(apiEndpoints.bids),
          fetch(apiEndpoints.holdings),
          fetch(apiEndpoints.orders),
          fetch(apiEndpoints.positions),
        ]);

        const [bids, holdings, orders, positions] = await Promise.all([
          bidsRes.json(),
          holdingsRes.json(),
          ordersRes.json(),
          positionsRes.json(),
        ]);

        // Calculate available cash (sum cash from holdings & bids)
        const cashFromHoldings = holdings.reduce((acc, h) => acc + (h.cash || 0), 0);
        const cashFromBids = bids.reduce((acc, b) => acc + (b.bidPrice * b.quantity || 0), 0);

        // Funds added and withdrawn from orders (example)
        let fundsAdded = 0;
        let fundsWithdrawn = 0;
        orders.forEach((order) => {
          if (order.type === "deposit") fundsAdded += order.amount;
          if (order.type === "withdrawal") fundsWithdrawn += order.amount;
        });

        // Transactions from orders
        const transactions = orders.map((order) => ({
          id: order._id,
          type: order.type,
          amount: order.amount,
          date: order.date,
          status: order.status,
        }));

        setWallet({
          availableCash: cashFromHoldings - cashFromBids, // subtract bids amount as pending bids hold cash
          fundsAdded,
          fundsWithdrawn,
          transactions,
        });
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container py-3" style={{ fontSize: "0.85rem" }}>
      {/* Banner */}
      <div
        className="alert py-2 mb-3"
        role="alert"
        style={{
          fontSize: "0.9rem",
          backgroundColor: "#eafaf1",
          color: "#14532d",
          border: "1px solid #b9eac8",
        }}
      >
        Introducing GrowPaisa’s smart marketwatch — prebuilt index lists, smart groups, and watchlists supporting 250+ assets.
        <a
          href="#"
          className="alert-link ms-1"
          style={{ color: "#198754", fontWeight: 500 }}
        >
          Read more.
        </a>
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="text-muted small">
          Fast, zero-fee transfers via <strong>UPI</strong> ✨
        </div>
        <div>
          <button
            className="btn me-2"
            style={{ backgroundColor: "#198754", color: "#fff", fontSize: "0.85rem" }}
          >
            Add funds
          </button>
          <button className="btn btn-outline-success" style={{ fontSize: "0.85rem" }}>
            Withdraw
          </button>
        </div>
      </div>

      {/* Wallet Summary Card */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h5 className="mb-3" style={{ fontWeight: 600, fontSize: "1rem", color: "#1a1a1a" }}>
            💰 Wallet Summary
          </h5>
          <div className="d-flex justify-content-between mb-2">
            <span>Available Cash</span>
            <span className="fw-bold">₹{wallet.availableCash.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Funds Added</span>
            <span className="fw-bold text-success">+₹{wallet.fundsAdded.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span>Funds Withdrawn</span>
            <span className="fw-bold text-danger">-₹{wallet.fundsWithdrawn.toFixed(2)}</span>
          </div>

          <hr />

          <h6 className="mb-3" style={{ fontWeight: 600 }}>
            Transaction History
          </h6>
          {wallet.transactions.length === 0 ? (
            <p style={{ color: "#6c757d", fontSize: "0.85rem" }}>
              No transactions yet.
            </p>
          ) : (
            <ul className="list-group" style={{ fontSize: "0.8rem" }}>
              {wallet.transactions.map((tx) => (
                <li
                  key={tx.id}
                  className={`list-group-item d-flex justify-content-between align-items-center ${
                    tx.type === "deposit" ? "list-group-item-success" : tx.type === "withdrawal" ? "list-group-item-danger" : ""
                  }`}
                >
                  <div>
                    <strong>{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}</strong> - ₹{tx.amount.toFixed(2)}
                    <br />
                    <small className="text-muted">{new Date(tx.date).toLocaleDateString()}</small>
                  </div>
                  <span
                    className={`badge rounded-pill ${
                      tx.status === "completed" ? "bg-success" : "bg-warning text-dark"
                    }`}
                  >
                    {tx.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
