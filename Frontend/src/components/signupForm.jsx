import React, { useState } from "react";
import "./signupForm.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// Ensure you have this CSS file for styling
const SignupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    if (!formData.password) errs.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errs.confirmPassword = "Passwords do not match";
    return errs;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  try {
    const response = await fetch("https://growpaisa.onrender.com/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      }),
    });

    const result = await response.json();

    if (response.ok) {
  Swal.fire({
  icon: "success",
  title: "Signup Successful!",
  text: result.message || "Welcome to GrowPaisa!",
  confirmButtonColor: "#0f766e",
});

  setFormData({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  setErrors({});
  onClose();
} else {
 Swal.fire({
  icon: "error",
  title: "Signup Failed",
  text: result.error || "Please try again with a different email.",
  confirmButtonColor: "#d33",
});

}

  } catch (error) {
    console.error("Error submitting form:", error);
    Swal.fire({
  icon: "error",
  title: "Something went wrong",
  text: "An error occurred. Please try again later.",
});

  }
};


  return (
    <section
      id="signup-form"
      className="signup-form-section"
    >
      <div className="signup-form-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="signup-title">Create Your GrowPaisa Account</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.fullName && <div className="error-text">{errors.fullName}</div>}

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.email && <div className="error-text">{errors.email}</div>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.password && <div className="error-text">{errors.password}</div>}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.confirmPassword && (
            <div className="error-text">{errors.confirmPassword}</div>
          )}

          <div className="signup-buttons">
            <button type="submit" className="signup-submit-btn">
              Sign Up
            </button>
            <button type="button" className="signup-cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
