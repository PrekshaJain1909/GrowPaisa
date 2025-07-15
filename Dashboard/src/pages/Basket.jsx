import React, { useState } from "react";

// GrowPaisa themed Order Hub Popup
function OrderHubPopup({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: 1050,
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "580px" }}>
        <div className="modal-content border-0 rounded-4 shadow-sm">
          {/* Modal Header */}
          <div className="modal-header bg-white border-0 rounded-top-4 px-4">
            <h5 className="modal-title fw-semibold text-dark">
              🧺 GrowPaisa Order Hub
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body px-4 py-3">
            {/* Search + Checkbox Row */}
            <div className="d-flex align-items-center mb-4">
              <div className="input-group shadow-sm">
                <span className="input-group-text bg-white border-end-0">
                  🔍
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search orders or stocks..."
                />
              </div>
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="clearItems"
                  disabled
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="clearItems"
                  style={{ fontSize: "0.92rem" }}
                >
                  Auto-clear
                </label>
              </div>
            </div>

            {/* Empty State */}
            <div
              className="text-center text-muted"
              style={{ fontSize: "1rem", padding: "40px 0" }}
            >
              📭 No orders in your GrowPaisa hub yet.
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer border-0 px-4 pb-4">
            <button className="btn btn-success px-4" disabled>
              Confirm All
            </button>
            <button
              className="btn btn-outline-dark ms-2 px-4"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component to trigger modal
export default function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="p-5 text-center">
      <OrderHubPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}
