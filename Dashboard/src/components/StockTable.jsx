import React, { useState } from "react";
import "./StockTable.css"; // Keep your styles, or update to match GrowPaisa branding

const stocks = [
  { symbol: "HDFCBANK", change: -0.10, percent: -0.01, price: 1933.65 },
  { symbol: "INFY", change: -23.10, percent: -1.43, price: 1589.90 },
  { symbol: "TCS", change: -17.80, percent: -0.50, price: 3562.95 },
  { symbol: "ONGC", change: -0.34, percent: -0.14, price: 247.27 },
];

export default function StockTable() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container my-4">
      <h5 className="text-muted fw-semibold mb-3">GrowPaisa Watchlist</h5>
      <div className="table-responsive">
        <table className="table table-hover align-middle shadow-sm rounded">
          <thead className="table-light">
            <tr className="text-muted">
              <th scope="col">Symbol</th>
              <th scope="col">Change</th>
              <th scope="col">%</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, idx) => (
              <tr
                key={stock.symbol}
                className={hoveredIndex === idx ? "table-primary" : ""}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <td colSpan={hoveredIndex === idx ? 4 : 1}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-semibold text-dark">{stock.symbol}</span>
                    {hoveredIndex === idx && (
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-success">Buy</button>
                        <button className="btn btn-sm btn-outline-danger">Sell</button>
                        <button className="btn btn-sm btn-outline-secondary">Info</button>
                        <button className="btn btn-sm btn-outline-dark">Delete</button>
                      </div>
                    )}
                  </div>
                </td>

                {hoveredIndex !== idx && (
                  <>
                    <td className={stock.change < 0 ? "text-danger" : "text-success"}>
                      {stock.change}
                    </td>
                    <td className={stock.percent < 0 ? "text-danger" : "text-success"}>
                      {stock.percent}%
                    </td>
                    <td className="fw-medium text-dark">{stock.price}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
