import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/admin/dashboard"
              >
                <i className="fa-solid fa-house-chimney"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/products">
                <i className="fa-solid fa-box-open"></i> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/shopping-carts">
                <i className="fa-solid fa-cart-shopping"></i> Shopping Carts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">
                <i className="fa-solid fa-bag-shopping"></i> Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">
                <i className="fa-regular fa-images"></i> Product Images
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/orders">
                <i class="fa-regular fa-rectangle-list"></i> Line Items
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
