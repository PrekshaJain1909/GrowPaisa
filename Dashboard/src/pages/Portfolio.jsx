import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Portfolio() {
  const [holdings, setHoldings] = useState([]);
  const [summary, setSummary] = useState(null);
  const [form, setForm] = useState({ name: "", qty: "", avgCost: "", ltp: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://growpaisa.onrender.com/api/portfolio");
      const data = res.data;
      setHoldings(data);

      const totalInvested = data.reduce((sum, h) => sum + h.invested, 0);
      const currentValue = data.reduce((sum, h) => sum + h.curVal, 0);
      const totalPL = currentValue - totalInvested;

      setSummary({
        totalInvested,
        currentValue,
        totalPL,
        totalPLPercent: ((totalPL / totalInvested) * 100).toFixed(2),
      });
    } catch (error) {
      console.error("Error loading holdings:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`https://growpaisa.onrender.com/api/portfolio/${editingId}`, form);
    } else {
      await axios.post("https://growpaisa.onrender.com/api/portfolio", form);
    }
    setForm({ name: "", qty: "", avgCost: "", ltp: "" });
    setEditingId(null);
    fetchData();
  };

  const handleEdit = (h) => {
    setForm({ name: h.name, qty: h.qty, avgCost: h.avgCost, ltp: h.ltp });
    setEditingId(h._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://growpaisa.onrender.com/api/portfolio/${id}`);
    fetchData();
  };

  if (!summary) return <p className="text-center mt-5">Loading portfolio...</p>;

  return (
    <div className="container py-4">
      <h4 className="fw-bold text-success mb-4">Your Portfolio</h4>

      {/* Add/Edit Form */}
      <form className="row g-2 mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Stock Name"
          className="form-control col"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Qty"
          className="form-control col"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Avg Cost"
          className="form-control col"
          value={form.avgCost}
          onChange={(e) => setForm({ ...form, avgCost: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="LTP"
          className="form-control col"
          value={form.ltp}
          onChange={(e) => setForm({ ...form, ltp: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-success col-auto">
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {/* Summary */}
      <div className="row text-center mb-3">
        <div className="col">Invested: ₹{summary.totalInvested.toFixed(2)}</div>
        <div className="col">Current Value: ₹{summary.currentValue.toFixed(2)}</div>
        <div className="col text-success">
          Total P&L: ₹{summary.totalPL.toFixed(2)} ({summary.totalPLPercent}%)
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Avg Cost</th>
            <th>LTP</th>
            <th>Invested</th>
            <th>Current Value</th>
            <th>P&L</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h) => (
            <tr key={h._id}>
              <td>{h.name}</td>
              <td>{h.qty}</td>
              <td>₹{h.avgCost.toFixed(2)}</td>
              <td>₹{h.ltp.toFixed(2)}</td>
              <td>₹{h.invested.toFixed(2)}</td>
              <td>₹{h.curVal.toFixed(2)}</td>
              <td className={h.pnl >= 0 ? "text-success" : "text-danger"}>
                ₹{h.pnl.toFixed(2)}
              </td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(h)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(h._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
