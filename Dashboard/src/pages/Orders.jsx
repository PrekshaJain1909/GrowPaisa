import React from 'react';

const Orders = () => {
  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: 'auto',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      {/* Icon */}
      <div className="mb-3" style={{ opacity: 0.12 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-journals"
          viewBox="0 0 16 16"
        >
          <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
          <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
        </svg>
      </div>

      {/* Message */}
      <h2 style={{ fontSize: '1.25rem', color: '#333', fontWeight: 600 }}>
        No activity yet
      </h2>
      <p style={{ color: '#6c757d', fontSize: '0.95rem', marginTop: 8 }}>
        Once you place your first order, it will appear here.
      </p>

      {/* Button */}
      <div style={{ marginTop: '24px', marginBottom: '8px' }}>
        <button
          style={{
            padding: '12px 28px',
            backgroundColor: '#198754',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.95rem',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            transition: 'background 0.2s'
          }}
        >
          🚀 Start Trading
        </button>
      </div>

      {/* Link */}
      <div>
        <a
          href="#"
          style={{
            color: '#198754',
            textDecoration: 'underline',
            fontSize: '0.85rem'
          }}
        >
          See past orders
        </a>
      </div>
    </div>
  );
};

export default Orders;
