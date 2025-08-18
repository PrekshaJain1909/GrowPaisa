import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT from login
        const res = await fetch("http://localhost:5000/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
          fontFamily: "'Segoe UI', sans-serif",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "auto",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
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
        <h2 style={{ fontSize: "1.25rem", color: "#333", fontWeight: 600 }}>
          No activity yet
        </h2>
        <p style={{ color: "#6c757d", fontSize: "0.95rem", marginTop: 8 }}>
          Once you place your first order, it will appear here.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Your Orders</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead style={{ backgroundColor: "#198754", color: "#fff" }}>
          <tr>
            <th style={{ padding: "10px" }}>Symbol</th>
            <th style={{ padding: "10px" }}>Quantity</th>
            <th style={{ padding: "10px" }}>Price</th>
            <th style={{ padding: "10px" }}>Type</th>
            <th style={{ padding: "10px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>{order.symbol}</td>
              <td style={{ padding: "10px" }}>{order.quantity}</td>
              <td style={{ padding: "10px" }}>${order.price}</td>
              <td style={{ padding: "10px" }}>{order.type}</td>
              <td style={{ padding: "10px" }}>{order.status || "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
