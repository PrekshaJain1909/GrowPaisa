import React, { useEffect, useState } from "react";

export default function Overview() {
  const [data, setData] = useState({
    currentBalance: 0,
    totalInvestment: 0,
    profitLoss: 0,
    recentTransactions: [],
  });

  useEffect(() => {
    async function fetchOverview() {
      try {
        // Replace these URLs with your actual backend API endpoints
        const holdingsRes = await fetch("https://growpaisa.onrender.com/api/holdings");
        const positionsRes = await fetch("https://growpaisa.onrender.com/api/positions");
        const ordersRes = await fetch("https://growpaisa.onrender.com/api/orders");

        const holdings = await holdingsRes.json();
        const positions = await positionsRes.json();
        const orders = await ordersRes.json();

        // Calculate currentBalance (e.g. sum of cash available + value of holdings)
        const cashAvailable = holdings.reduce((acc, h) => acc + (h.cash || 0), 0);

        // Total investment = sum of buyPrice * quantity from positions
        const totalInvestment = positions.reduce(
          (acc, pos) => acc + pos.buyPrice * pos.quantity,
          0
        );

        // Calculate current market value of positions
        const currentValue = positions.reduce(
          (acc, pos) => acc + pos.currentPrice * pos.quantity,
          0
        );

        // Profit/Loss = currentValue - totalInvestment
        const profitLoss = currentValue - totalInvestment;

        // Recent transactions - take last 5 orders sorted by date descending
        const recentTransactions = orders
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);

        setData({
          currentBalance: cashAvailable + currentValue,
          totalInvestment,
          profitLoss,
          recentTransactions,
        });
      } catch (error) {
        console.error("Failed to fetch overview data:", error);
      }
    }

    fetchOverview();
  }, []);

  const { currentBalance, totalInvestment, profitLoss, recentTransactions } = data;

  return (
    <div className="container py-4" style={{ fontSize: "0.9rem" }}>
      <h3 style={{ color: "#198754", fontWeight: 600, marginBottom: "1rem" }}>
        📊 Portfolio Overview
      </h3>

      <div className="row mb-4">
        {/* Current Balance */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="text-muted">Current Balance</h6>
              <h4 style={{ color: "#198754", fontWeight: "700" }}>
                ₹{currentBalance.toFixed(2)}
              </h4>
            </div>
          </div>
        </div>

        {/* Total Investment */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h6 className="text-muted">Total Investment</h6>
              <h4 style={{ color: "#0d6efd", fontWeight: "700" }}>
                ₹{totalInvestment.toFixed(2)}
              </h4>
            </div>
          </div>
        </div>

        {/* Profit / Loss */}
        <div className="col-md-4 mb-3">
          <div
            className="card shadow-sm border-0"
            style={{ color: profitLoss >= 0 ? "#198754" : "#dc3545" }}
          >
            <div className="card-body text-center">
              <h6 className="text-muted">Profit / Loss</h6>
              <h4 style={{ fontWeight: "700" }}>
                {profitLoss >= 0 ? "📈" : "📉"} ₹{profitLoss.toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white" style={{ fontWeight: 600 }}>
          Recent Transactions
        </div>
        <ul className="list-group list-group-flush" style={{ fontSize: "0.85rem" }}>
          {recentTransactions.length === 0 && (
            <li className="list-group-item text-muted text-center">
              No recent transactions
            </li>
          )}
          {recentTransactions.map((tx) => (
            <li
              key={tx._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}</strong> - ₹{tx.amount.toFixed(2)}
                <br />
                <small className="text-muted">{new Date(tx.date).toLocaleString()}</small>
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
      </div>
    </div>
  );
}
