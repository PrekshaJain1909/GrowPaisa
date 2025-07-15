import React, { useState } from "react";

export default function ProfilePopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  return (
    <div>
      {isOpen && (
        <div
          className="position-absolute bg-white border shadow rounded p-3"
          style={{
            top: 12,
            right: -170,
            width: 280,
            zIndex: 1050,
            fontFamily: "'Segoe UI', Arial, sans-serif",
            color: "#343a40",
          }}
        >
          {/* Close Button */}
          <div className="d-flex justify-content-end">
            <button className="btn-close btn-sm" onClick={() => setIsOpen(false)}></button>
          </div>

          {/* User Info */}
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="fw-semibold" style={{ fontSize: 18 }}>
                  Raghav Garg
                </div>
                <div className="text-muted small" style={{ fontSize: 13 }}>
                  raghavgarg92004@gmail.com
                </div>
              </div>
              <i className="bi bi-pencil small text-success" style={{ cursor: "pointer" }}></i>
            </div>
          </div>

          {/* Privacy Mode */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span>Privacy mode</span>
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacySwitch"
                checked={privacy}
                onChange={() => setPrivacy(!privacy)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          {/* Menu */}
          <ul className="list-unstyled mb-0">
            {[
              ["bi-terminal", "Console"],
              ["bi-coin", "Coin"],
              ["bi-life-preserver", "Support"],
              ["bi-person-plus", "Invite friends"],
              null,
              ["bi-compass", "Tour GrowPaisa"],
              ["bi-keyboard", "Keyboard shortcuts"],
              ["bi-book", "User manual"],
              ["bi-box-arrow-right", "Logout"],
            ].map((item, index) =>
              item === null ? (
                <li key={index}>
                  <hr className="my-2" />
                </li>
              ) : (
                <li key={index} className="mb-2">
                  <a
                    href="#"
                    className="d-flex align-items-center text-decoration-none text-dark"
                    style={{ transition: "color 0.2s" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#198754")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#343a40")}
                  >
                    <i className={`${item[0]} me-2`}></i> {item[1]}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
