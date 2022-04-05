import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./auth.css";

const Register = () => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = React.useState({
    name: "",
    email: "",
    password: "",
    type: "Admin",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/users/auth/register`, registerUser)
      .then((response) => {
        setRegisterUser(response.data);
        navigate("/admin/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-4 w-50">
      <h1 className="text-center mb-3">Register Limeloots CMS</h1>
      <form
        className="needs-validation"
        noValidate
        autoComplete="off"
        onSubmit={handleRegister}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={(e) =>
              setRegisterUser({ ...registerUser, name: e.target.value })
            }
            required
          />
        </div>
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
              setRegisterUser({ ...registerUser, email: e.target.value })
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
              setRegisterUser({ ...registerUser, password: e.target.value })
            }
            required
          />
        </div>
        <input
          type="hidden"
          name="type"
          id="type"
          onChange={(e) =>
            setRegisterUser({ ...registerUser, type: e.target.value })
          }
        />
        <div className="text-center">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
      <div className="text-center">
        <small>
          Have already an account? Login
          <Link to="/admin/login"> here</Link>.
        </small>
      </div>
    </div>
  );
};

export default Register;
