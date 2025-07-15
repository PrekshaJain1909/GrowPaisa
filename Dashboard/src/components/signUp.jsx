import React, { useState } from "react";

function GrowPaisaLogin() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Continue pressed with email: " + email);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex p-0">
      {/* Left Panel */}
      <div className="d-none d-md-flex flex-column justify-content-center align-items-start col-md-6 bg-dark text-white p-5 position-relative">
        <h1 className="fw-bold mb-4" style={{ fontSize: "2.6rem", lineHeight: "1.3" }}>
          Invest Smarter <br /> with GrowPaisa.
        </h1>
        <p className="text-light" style={{ fontSize: "1.1rem" }}>
          Your journey to financial growth begins here.
        </p>
        <div className="position-absolute bottom-0 mb-4 ms-4 d-flex align-items-center">
          <div style={{ width: 30, height: 6, background: "#28a745", borderRadius: 3, marginRight: 10 }}></div>
          <span className="fw-semibold fs-5">GrowPaisa</span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-white position-relative">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-4"
          aria-label="Close"
        ></button>

        <div className="w-100" style={{ maxWidth: 420 }}>
          <h2 className="fw-bold mb-4 text-center text-dark">Welcome to GrowPaisa</h2>

          {/* Google Button */}
          <button className="btn btn-outline-success w-100 mb-3 d-flex align-items-center justify-content-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              width={20}
              height={20}
              className="me-2"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1 m-0" />
            <span className="mx-2 text-muted">or</span>
            <hr className="flex-grow-1 m-0" />
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control shadow-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Continue
            </button>
          </form>

          {/* Terms */}
          <p className="text-center text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            By proceeding, you agree to our
            <a href="#" className="text-success text-decoration-underline mx-1">Terms</a>,
            <a href="#" className="text-success text-decoration-underline mx-1">Privacy Policy</a> &
            <a href="#" className="text-success text-decoration-underline mx-1">Tariff Rates</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GrowPaisaLogin;
