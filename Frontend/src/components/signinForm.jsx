import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signinForm.css";

const SignInForm = ({ onClose }) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) errs.email = "Email is required";
    if (!formData.password.trim()) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      try {
        const res = await axios.post("https://growpaisa.onrender.com/api/auth/signin", formData);
        console.log("Submitting data to backend:", {
  email: formData.email,
  password: formData.password,
});

        if (res.data.success) {
  window.location.href = "https://grow-paisa.vercel.app/"; // Or the deployed dashboard link


        } else {
          setServerError("Invalid email or password");
        }
      } catch (error) {
        console.error("Signin error:", error);
        setServerError("Server error. Please try again.");
      }
    }
  };

  return (
    <section id="signin-form" className="signin-form-section">
      <div className="signin-form-container">
        
        <h2 className="signin-title mt-5 pt-3">Welcome Back to GrowPaisa</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signin-input"
          />
          {errors.email && <div className="error-text">{errors.email}</div>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signin-input"
          />
          {errors.password && <div className="error-text">{errors.password}</div>}

          {serverError && <div className="error-text">{serverError}</div>}

          <div className="signin-buttons">
            <button type="submit" className="signin-submit-btn">
              Sign In
            </button>
            <button type="button" className="signin-cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInForm;
