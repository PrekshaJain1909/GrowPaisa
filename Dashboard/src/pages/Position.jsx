import React, { useEffect, useState } from "react";

export default function Positions() {
  const [positions, setPositions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    symbol: "",
    quantity: "",
    buyPrice: "",
    currentPrice: "",
    dayChangePercent: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/positions")
      .then((res) => res.json())
      .then((data) => {
        setPositions(data);
        setLoading(false);
      })
      .catch(() => {
        setPositions([]);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      symbol: "",
      quantity: "",
      buyPrice: "",
      currentPrice: "",
      dayChangePercent: "",
    });
    setEditingId(null);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Validate minimal
    if (!formData.symbol || !formData.quantity) {
      alert("Symbol and quantity are required");
      return;
    }

    const payload = {
      symbol: formData.symbol.toUpperCase(),
      quantity: Number(formData.quantity),
      buyPrice: Number(formData.buyPrice),
      currentPrice: Number(formData.currentPrice),
      dayChangePercent: Number(formData.dayChangePercent),
    };

    try {
      if (editingId) {
        // Update existing
        await fetch(`http://localhost:5000/api/positions/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // Add new
        await fetch("http://localhost:5000/api/positions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      fetchPositions();
      resetForm();
    } catch (err) {
      alert("Failed to save position");
    }
  };

  const handleEdit = (pos) => {
    setEditingId(pos.id);
    setFormData({
      symbol: pos.symbol,
      quantity: pos.quantity,
      buyPrice: pos.buyPrice,
      currentPrice: pos.currentPrice,
      dayChangePercent: pos.dayChangePercent,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this position?")) return;

    try {
      await fetch(`http://localhost:5000/api/positions/${id}`, {
        method: "DELETE",
      });
      fetchPositions();
    } catch {
      alert("Failed to delete position");
    }
  };

  if (loading) {
    return (
      <div className="container py-4" style={{ textAlign: "center" }}>
        <p>Loading positions...</p>
      </div>
    );
  }

  return (
    <div className="container py-4" style={{ maxWidth: 900 }}>
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

      {/* Add/Edit Form */}
      <form onSubmit={submitForm} style={{ marginBottom: 30 }}>
        <h5>{editingId ? "Edit Position" : "Add New Position"}</h5>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
          <input
            name="symbol"
            placeholder="Symbol"
            value={formData.symbol}
            onChange={handleInputChange}
            required
            style={{ flex: "1 1 100px", padding: 8 }}
          />
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
            style={{ flex: "1 1 100px", padding: 8 }}
          />
          <input
            name="buyPrice"
            type="number"
            step="0.01"
            placeholder="Buy Price"
            value={formData.buyPrice}
            onChange={handleInputChange}
            style={{ flex: "1 1 120px", padding: 8 }}
          />
          <input
            name="currentPrice"
            type="number"
            step="0.01"
            placeholder="Current Price"
            value={formData.currentPrice}
            onChange={handleInputChange}
            style={{ flex: "1 1 120px", padding: 8 }}
          />
          <input
            name="dayChangePercent"
            type="number"
            step="0.01"
            placeholder="Day Change %"
            value={formData.dayChangePercent}
            onChange={handleInputChange}
            style={{ flex: "1 1 120px", padding: 8 }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 20px",
              backgroundColor: "#198754",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            {editingId ? "Update" : "Add"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              style={{
                padding: "8px 20px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Positions Table or Empty State */}
      {!positions || positions.length === 0 ? (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "40vh", textAlign: "center" }}
        >
          <p>No active positions found.</p>
        </div>
      ) : (
        <table className="table table-striped" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Buy Price</th>
              <th>Current Price</th>
              <th>Unrealized P/L</th>
              <th>Day Change (%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos) => {
              const unrealizedPL = (pos.currentPrice - pos.buyPrice) * pos.quantity;
              return (
                <tr key={pos.id}>
                  <td>{pos.symbol}</td>
                  <td>{pos.quantity}</td>
                  <td>${pos.buyPrice.toFixed(2)}</td>
                  <td>${pos.currentPrice.toFixed(2)}</td>
                  <td style={{ color: unrealizedPL >= 0 ? "green" : "red" }}>
                    ${unrealizedPL.toFixed(2)}
                  </td>
                  <td style={{ color: pos.dayChangePercent >= 0 ? "green" : "red" }}>
                    {pos.dayChangePercent.toFixed(2)}%
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(pos)}
                      style={{
                        marginRight: 8,
                        padding: "4px 8px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pos.id)}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
