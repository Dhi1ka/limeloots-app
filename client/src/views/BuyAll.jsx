import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BuyAll = ({ user, setUser, addCart, setAddCart }) => {
  const [cartProduct, setCartProduct] = React.useState([]);
  const url = "http://localhost:5000";

  React.useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => setCartProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleProcess = (e) => {
    e.preventDefault();

    console.log("buy process!!");
  };

  return (
    <>
      <Navbar
        user={user}
        setUser={setUser}
        addCart={addCart}
        setAddCart={setAddCart}
      />
      <div className="container">
        <h1>Buy Process</h1>
        <div className="row g-5">
          <div className="col-md-8">
            <form onSubmit={handleProcess} noValidate autoComplete="off">
              <h4>Billing Address</h4>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                  className="form-control"
                />
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="20"
                  rows="2"
                  className="form-control"
                  placeholder="Enter Address"
                ></textarea>
              </div>
              <h4>Payment</h4>
              <div>
                <label htmlFor="payTrxNumber" className="form-label">
                  Payment Transaction Number
                </label>
                <input
                  type="text"
                  name="payTrxNumber"
                  id="payTrxNumber"
                  placeholder="Enter Payment Transaction Number"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <Link to="/products" className="btn btn btn-secondary me-2">
                  <AiOutlineArrowLeft fontSize={16} /> Back to Products
                </Link>
                <button className="btn btn-primary" type="submit">
                  Process to Buy IDR{cartProduct.price}
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h5 className="my-0">{cartProduct.name}</h5>
                  <small className="text-muted">{cartProduct.desc}</small>
                </div>
                <span className="text-muted">IDR{cartProduct.price}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (IDR)</span>
                <strong>IDR{cartProduct.price}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyAll;
