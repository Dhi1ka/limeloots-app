import React from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    type: "User",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/users/auth/login`, loginUser)
      .then((response) => {
        setLoginUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-4 w-50">
      <h1 className="text-center mb-3">Login Limeloots</h1>
      <form
        className="needs-validation"
        noValidate
        autoComplete="off"
        onSubmit={handleLogin}
      >
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
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
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
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            required
          />
        </div>
        <input
          type="hidden"
          name="type"
          id="type"
          onChange={(e) => setLoginUser({ ...loginUser, type: e.target.value })}
        />
        <div className="text-center">
          <button className="btn btn-primary me-2" type="submit">
            Login
          </button>
          <Link to="/" className="btn btn-warning">
            Back
          </Link>
        </div>
      </form>
      <div className="text-center">
        <small>
          Haven't already an account yet? Register
          <Link to="/register"> here</Link>.
        </small>
      </div>
    </div>
  );
};

export default Login;
