import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form data
  const validate = () => {
    let tempErrors = {};
    tempErrors.email = /^\S+@\S+\.\S+$/.test(formData.email)
      ? ""
      : "Email is not valid.";
    tempErrors.password =
      formData.password.length >= 6
        ? ""
        : "Password must be at least 6 characters.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission (e.g., API call)
      console.log("Form Submitted", formData);
      // Reset form (optional)
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} noValidate>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn submit-btn">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
