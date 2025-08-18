import React, { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import "./StockTable.css";
import "bootstrap/dist/css/bootstrap.min.css";

// 🟩 BuyModal Component
function BuyModal({ show, handleClose, stock }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(stock?.price || 0);
  const [isIntraday, setIsIntraday] = useState(false);

  useEffect(() => {
    if (stock) {
      setPrice(stock.price);
      setQuantity(1);
      setIsIntraday(false);
    }
  }, [stock]);

  const handleBuy = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Success",
      html: `✅ Bought <b>${quantity}</b> of <b>${stock.symbol}</b> at ₹${price} (${isIntraday ? "Intraday" : "Delivery"})`,
      confirmButtonColor: "#28a745",
    });
    handleClose();
  };

  if (!stock?.symbol) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="text-success fw-bold">
          Buy Shares - {stock.symbol}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <Form onSubmit={handleBuy}>
          <Form.Group className="mb-3">
            <Form.Label className="text-dark fw-semibold">Number of Shares</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-success text-white">Qty</InputGroup.Text>
              <Form.Control
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-dark fw-semibold">Price (₹)</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="Intraday"
            checked={isIntraday}
            onChange={() => setIsIntraday(!isIntraday)}
            className="mb-3"
          />

          <Button variant="success" type="submit" className="w-100 rounded-pill">
            Confirm Purchase
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

// 🟦 StockTable Component
const initialStocks = [
  { symbol: "HDFCBANK", change: -0.10, percent: -0.01, price: 1933.65 },
  { symbol: "INFY", change: -23.10, percent: -1.43, price: 1589.90 },
  { symbol: "TCS", change: -17.80, percent: -0.50, price: 3562.95 },
  { symbol: "ONGC", change: -0.34, percent: -0.14, price: 247.27 },
];

export default function StockTable() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stocks, setStocks] = useState(initialStocks);
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleBuyClick = (stock) => {
    setSelectedStock(stock);
    setShowModal(true);
  };

  const handleInfo = (stock) => {
    Swal.fire({
      icon: "info",
      title: `${stock.symbol} Info`,
      html: `
        <b>Price:</b> ₹${stock.price}<br/>
        <b>Change:</b> ${stock.change} <br/>
        <b>Percent:</b> ${stock.percent}%
      `,
      confirmButtonColor: "#6c757d",
    });
  };

  const handleDelete = (symbol) => {
    Swal.fire({
      title: `Remove ${symbol}?`,
      text: "This stock will be removed from your watchlist!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedStocks = stocks.filter((s) => s.symbol !== symbol);
        setStocks(updatedStocks);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${symbol} has been removed.`,
          confirmButtonColor: "#3085d6",
        });
      }
    });
  };

  const handleSell = (stock) => {
    Swal.fire({
      title: `Sell ${stock.symbol}`,
      input: "number",
      inputLabel: "Enter quantity to sell",
      inputAttributes: {
        min: 1,
      },
      inputValidator: (value) => {
        if (!value || value <= 0) {
          return "Please enter a valid quantity!";
        }
      },
      showCancelButton: true,
      confirmButtonText: "Sell",
      confirmButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Sold!",
          html: `You sold <b>${result.value}</b> shares of <b>${stock.symbol}</b>`,
          confirmButtonColor: "#28a745",
        });
      }
    });
  };

  return (
    <div className="container my-4">
      <h5 className="text-muted fw-semibold mb-3">GrowPaisa Watchlist</h5>

      {/* Modal */}
      <BuyModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        stock={selectedStock || {}}
      />

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle shadow-sm rounded">
          <thead className="table-light">
            <tr className="text-muted">
              <th>Symbol</th>
              <th>Change</th>
              <th>%</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, idx) => (
              <tr
                key={stock.symbol}
                className={hoveredIndex === idx ? "table-primary" : ""}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <td colSpan={hoveredIndex === idx ? 4 : 1}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-semibold text-dark">{stock.symbol}</span>
                    {hoveredIndex === idx && (
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-success"
                          onClick={() => handleBuyClick(stock)}
                        >
                          Buy
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleSell(stock)}
                        >
                          Sell
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleInfo(stock)}
                        >
                          Info
                        </button>
                        <button
                          className="btn btn-sm btn-outline-dark"
                          onClick={() => handleDelete(stock.symbol)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>

                {hoveredIndex !== idx && (
                  <>
                    <td className={stock.change < 0 ? "text-danger" : "text-success"}>
                      {stock.change}
                    </td>
                    <td className={stock.percent < 0 ? "text-danger" : "text-success"}>
                      {stock.percent}%
                    </td>
                    <td className="fw-medium text-dark">{stock.price}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
