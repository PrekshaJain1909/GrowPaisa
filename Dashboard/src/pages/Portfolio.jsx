import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Portfolio() {
  const [holdings, setHoldings] = useState([]);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/portfolio");
        const data = res.data;
        setHoldings(data);

        const totalInvested = data.reduce((sum, h) => sum + h.invested, 0);
        const currentValue = data.reduce((sum, h) => sum + h.curVal, 0);
        const daysPL = data.reduce((sum, h) => {
          const chg = parseFloat(h.dayChg?.replace("+", "").replace("%", "") || 0);
          return sum + ((chg / 100) * h.curVal);
        }, 0);
        const totalPL = currentValue - totalInvested;

        setSummary({
          totalInvested,
          currentValue,
          daysPL,
          daysPLPercent: ((daysPL / totalInvested) * 100).toFixed(2),
          totalPL,
          totalPLPercent: ((totalPL / totalInvested) * 100).toFixed(2),
        });
      } catch (error) {
        console.error("Error loading holdings:", error);
      }
    };

    fetchData();
  }, []);

  if (!summary) return <p className="text-center mt-5">Loading portfolio...</p>;

  return (
    <div className="container py-4" style={{ fontFamily: "Segoe UI, sans-serif" }}>
      <div className="card shadow-lg p-4 rounded" style={{ backgroundColor: "#f9fdfc" }}>
        {/* Heading */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold text-success">Your Portfolio</h4>
          <span className="badge bg-success-subtle text-success">
            Total Holdings: {holdings.length}
          </span>
        </div>

        {/* Summary */}
        <div className="row text-center mb-4">
          <div className="col-md-3 col-6 mb-2">
            <div className="text-muted">Total Invested</div>
            <div className="fw-semibold text-dark">₹{summary.totalInvested.toFixed(2)}</div>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <div className="text-muted">Current Value</div>
            <div className="fw-semibold text-dark">₹{summary.currentValue.toFixed(2)}</div>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <div className="text-muted">Day's P&L</div>
            <div className="fw-semibold text-success">
              ₹{summary.daysPL.toFixed(2)} ({summary.daysPLPercent}%)
            </div>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <div className="text-muted">Total P&L</div>
            <div className="fw-semibold text-success">
              ₹{summary.totalPL.toFixed(2)} ({summary.totalPLPercent}%)
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr className="text-muted small">
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg. Cost</th>
                <th>LTP</th>
                <th>Invested</th>
                <th>Cur. Val</th>
                <th>P&L</th>
                <th>Net Chg</th>
                <th>Day Chg</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h) => (
                <tr key={h.name}>
                  <td>{h.name}</td>
                  <td>{h.qty}</td>
                  <td>₹{h.avgCost.toFixed(2)}</td>
                  <td>₹{h.ltp.toFixed(2)}</td>
                  <td>₹{h.invested.toFixed(2)}</td>
                  <td>₹{h.curVal.toFixed(2)}</td>
                  <td className="text-success">₹{h.pnl.toFixed(2)}</td>
                  <td className="text-success">{h.netChg}</td>
                  <td className="text-success">{h.dayChg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Summary */}
        <div className="text-center mt-4">
          <span className="fw-bold fs-5 text-success">
            📈 Net Portfolio Value: ₹{summary.currentValue.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
