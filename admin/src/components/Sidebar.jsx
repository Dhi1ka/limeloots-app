import React from "react";
import { Link } from "react-router-dom";
import {
  BiTachometer,
  BiTable,
  BiUser,
  BiCartAlt,
  BiPackage,
} from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Limeloots CMS</span>
        </div>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
          <li>
            <Link className="nav-link px-0 align-middle" to="/admin/dashboard">
              <BiTachometer fontSize={30} />
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link px-0 align-middle" to="/admin/products">
              <BiPackage fontSize={30} />
              <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link px-0 align-middle"
              to="/admin/shopping-carts"
            >
              <BiCartAlt fontSize={30} />
              <span className="ms-1 d-none d-sm-inline">
                Shopping Cart
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link px-0 align-middle" to="/admin/orders">
              <BiTable fontSize={30} />
              <span className="ms-1 d-none d-sm-inline">Orders</span>{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link px-0 align-middle" to="/admin/members  ">
              <BiUser fontSize={30} />
              <span className="ms-1 d-none d-sm-inline">Members</span>{" "}
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
