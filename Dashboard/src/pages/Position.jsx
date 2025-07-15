import React from "react";

export default function Positions() {
  return (
    <div className="container py-4">
      {/* GrowPaisa Alert Banner */}
      <div
        className="mb-4 px-3 py-2 rounded"
        style={{
          backgroundColor: "#eafaf1",
          border: "1px solid #b9eac8",
          fontSize: "0.85rem",
          color: "#155724",
        }}
      >
        📊 Track live market updates, manage lists, and stay organized with GrowPaisa tools.{" "}
        <a
          href="#"
          style={{ color: "#198754", textDecoration: "underline", fontWeight: 500 }}
        >
          Explore more
        </a>
        .
      </div>

      {/* Empty Positions Message */}
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "60vh", textAlign: "center" }}
      >
        {/* Icon */}
        <div className="mb-3" style={{ opacity: 0.15 }}>
          <svg
            width="64"
            height="64"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2c0 .628-.297 1.177-.75 1.516V6h1a.5.5 0 1 1 0 1h-1v2.5a.5.5 0 0 1-1 0V7h-1a.5.5 0 0 1 0-1h1V4.516A1.992 1.992 0 0 1 6 3a2 2 0 0 1 2-2zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.5 11.938V10.5a.5.5 0 0 0-1 0v2.438A6.978 6.978 0 0 1 1 9.5a.5.5 0 0 0-1 0 7.978 7.978 0 0 0 7 7.938V15.5a.5.5 0 0 1 1 0v1.938A7.978 7.978 0 0 0 16 9.5a.5.5 0 0 0-1 0 6.978 6.978 0 0 1-6.5 5.438z" />
          </svg>
        </div>

        {/* Message */}
        <h4
          style={{
            color: "#1a1a1a",
            fontWeight: 600,
            fontSize: "1.15rem",
          }}
        >
          No active positions
        </h4>
        <p
          style={{
            color: "#6c757d",
            fontSize: "0.85rem",
            maxWidth: 440,
          }}
        >
          You haven’t placed any trades yet. Let’s begin your investment journey with GrowPaisa.
        </p>

        {/* CTA Button */}
        <button
          className="mb-2"
          style={{
            padding: "9px 20px",
            backgroundColor: "#198754",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 500,
            fontSize: "0.85rem",
            marginTop: "12px",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          Start Investing
        </button>

        {/* Link */}
        <a
          href="#"
          style={{
            color: "#198754",
            textDecoration: "underline",
            fontSize: "0.8rem",
          }}
        >
          Go to portfolio
        </a>
      </div>
    </div>
  );
}
