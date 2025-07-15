import React from "react";

export default function FundsDashboard() {
  return (
    <div className="container py-3" style={{ fontSize: "0.85rem" }}>
      {/* GrowPaisa Banner */}
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

      {/* Funds Cards */}
      <div className="row">
        {/* Equity Card */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0" style={{ fontWeight: 600, fontSize: "1rem", color: "#1a1a1a" }}>
                  📈 Equity
                </h5>
                <div>
                  <a href="#" className="me-3 text-success small fw-semibold">
                    View statement
                  </a>
                  <a href="#" className="text-success small fw-semibold">
                    Help
                  </a>
                </div>
              </div>

              <hr className="my-2" />

              {/* Balances */}
              <div className="mb-2 d-flex justify-content-between">
                <span>Available margin</span>
                <span className="fw-bold text-danger">-87.50</span>
              </div>
              <div className="mb-2 d-flex justify-content-between">
                <span>Used margin</span>
                <span className="fw-bold">0.00</span>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <span>Available cash</span>
                <span className="fw-bold text-danger">-87.50</span>
              </div>

              <hr className="my-2" />

              {/* Breakdown */}
              {[
                ["Opening balance", "-87.50"],
                ["Payin", "0.00"],
                ["Payout", "0.00"],
                ["SPAN", "0.00"],
                ["Delivery margin", "0.00"],
                ["Exposure", "0.00"],
                ["Options premium", "0.00"],
                ["Collateral (Liquid funds)", "0.00"],
                ["Collateral (Equity)", "0.00"],
                ["Total collateral", "0.00"],
              ].map(([label, value], i) => (
                <div className="d-flex justify-content-between" key={i}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commodity Card */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0" style={{ fontWeight: 600, fontSize: "1rem", color: "#1a1a1a" }}>
                  🌾 Commodity
                </h5>
                <div>
                  <a href="#" className="me-3 text-success small fw-semibold">
                    View statement
                  </a>
                  <a href="#" className="text-success small fw-semibold">
                    Help
                  </a>
                </div>
              </div>

              <hr className="my-2" />

              {/* Balances */}
              <div className="mb-2 d-flex justify-content-between">
                <span>Available margin</span>
                <span className="fw-bold">0.00</span>
              </div>
              <div className="mb-2 d-flex justify-content-between">
                <span>Used margin</span>
                <span className="fw-bold">0.00</span>
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <span>Available cash</span>
                <span className="fw-bold">0.00</span>
              </div>

              <hr className="my-2" />

              {/* Breakdown */}
              {[
                ["Opening balance", "0.00"],
                ["Payin", "0.00"],
                ["Payout", "0.00"],
                ["SPAN", "0.00"],
                ["Delivery margin", "0.00"],
                ["Exposure", "0.00"],
                ["Options premium", "0.00"],
              ].map(([label, value], i) => (
                <div className="d-flex justify-content-between" key={i}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
