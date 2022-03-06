import React from "react";
import { Link } from "react-router-dom";

import "./auth.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("login button clicked!");
  };

  return (
    <div className="container mt-4 w-50">
      <h1 className="text-center mb-3">Login Limeloots CMS</h1>
      <form className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleLogin}
            className="btn btn-primary"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <small>
          Haven't already an account yet? Register
          <Link to="/admin/register"> here</Link>.
        </small>
      </div>
    </div>
  );
};

export default Login;
