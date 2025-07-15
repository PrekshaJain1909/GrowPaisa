import React from "react";
import StockTable from "./components/StockTable";
import { Outlet } from "react-router-dom";
import TopNavbar from "./App"; // or TopNavbar

export default function Layout() {
  return (
    <>
      <TopNavbar />
      <div
        className="container-fluid"
        style={{
          maxWidth: "100vw", // prevent horizontal scroll
          overflowX: "hidden",
          padding: 0,
        }}
      >
        <div className="row no-gutters">
          <div
            className="col"
            style={{
              padding: "1rem",
              minHeight: "calc(100vh - 60px)", // adjust height if navbar is 60px
              overflow: "auto",
            }}
          >
            <Outlet />
          </div>
          <div
            className="col-3"
            style={{
              borderLeft: "1px solid #ddd",
              padding: "1rem",
              width:"380px",
              background: "#f8f9fa",
              minHeight: "calc(100vh - 60px)",
              overflow: "auto",
            }}
          >
            <StockTable />
          </div>
        </div>
      </div>
    </>
  );
}
