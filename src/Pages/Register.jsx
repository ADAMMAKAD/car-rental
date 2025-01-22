// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form data
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required.";
    tempErrors.email = /^\S+@\S+\.\S+$/.test(formData.email)
      ? ""
      : "Email is not valid.";
    tempErrors.password =
      formData.password.length >= 6
        ? ""
        : "Password must be at least 6 characters.";
    tempErrors.confirmPassword =
      formData.password === formData.confirmPassword
        ? ""
        : "Passwords do not match.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission (e.g., API call)
      console.log("Registration Successful", formData);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={errors.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && (
              <span className="error-msg">{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className="btn submit-btn">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Sign In Here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
