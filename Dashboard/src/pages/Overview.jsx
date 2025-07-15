import React from 'react';

const Overview = () => {
  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        maxWidth: '800px',
        margin: 'auto',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ color: '#1c1c1c', fontWeight: 700, fontSize: '1.7rem' }}>
          📋 Your Orders
        </h1>
        <p
          style={{
            color: '#555',
            maxWidth: 620,
            margin: '12px auto 0',
            fontSize: '0.92rem',
            lineHeight: '1.5'
          }}
        >
          Explore curated market insights, create custom groups, and track up to
          250 assets per list using our smart portfolio tools.{' '}
          <a
            href="#"
            style={{
              color: '#198754',
              textDecoration: 'underline',
              fontWeight: 500
            }}
          >
            Learn more
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Overview;
