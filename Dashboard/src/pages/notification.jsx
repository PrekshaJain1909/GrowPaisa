import React, { useState } from "react";

const notifications = [
  {
    text: "Introducing the all-new marketwatch — prebuilt lists for indices, custom groups, and 25 watchlists with 250 instruments each.",
    link: "Read more.",
    time: "4 hours ago"
  },
  {
    text: "Introducing GrowPaisa Stock Pages. Get a quick snapshot of key ratios, financials, and peer analysis all in one place.",
    link: "Read more.",
    time: "3 days ago"
  }
];

export default function NotificationPopup() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            background: "rgba(0,0,0,0.3)",
            fontFamily: "'Segoe UI', sans-serif"
          }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content border-0 shadow rounded-4"
              style={{
                fontSize: "0.9rem",
                backgroundColor: "#ffffff"
              }}
            >
              <div
                className="modal-header border-0 pb-2"
                style={{ borderBottom: "1px solid #eee" }}
              >
                <h5
                  className="modal-title fw-semibold text-success"
                  style={{ fontSize: "1rem" }}
                >
                  🔔 Notifications
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShow(false)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-0">
                {notifications.map((n, i) => (
                  <div
                    key={i}
                    className="d-flex flex-column flex-md-row justify-content-between align-items-start p-3 border-bottom"
                    style={{
                      transition: "background 0.2s",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f9f9f9")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <div style={{ fontSize: "0.88rem", color: "#212529" }}>
                      <span>{n.text} </span>
                      <a
                        href="#"
                        className="text-success text-decoration-underline"
                        style={{ fontSize: "0.87rem" }}
                      >
                        {n.link}
                      </a>
                    </div>
                    <div
                      className="text-muted small mt-2 mt-md-0"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {n.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
