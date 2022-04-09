import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

const Navbar = ({ user, setUser, addCart, setAddCart }) => {
  const navigate = useNavigate();
  const loginUser = localStorage.getItem("user", JSON.parse(user));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link className="text-decoration-none" to="/">
            Limeloots
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/products">
              Our Products
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggler mb-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="me-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <AiOutlineShoppingCart fontSize={20} />{" "}
                <span className="badge bg-info">{addCart}</span>
              </Link>
            </li>

            {loginUser ? (
              <li className="nav-item dropdown">
                <button
                  className="btn btn-sm nav-link dropdown-toggle"
                  id="navbarDropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineUser fontSize={20} />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end ms-auto"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <button className="dropdown-item" type="button">
                      Account Profile
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <BiLogIn fontSize={20} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
