import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Buy = ({ user, setUser, addCart, setAddCart }) => {
  const [buyProduct, setBuyProduct] = React.useState([]);
  const url = "https://api-limeloots.herokuapp.com";
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`${url}/products/detail/${id}`)
      .then((response) => setBuyProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

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
              <button className="btn btn-primary mt-3" type="submit">
                Process to Buy IDR{buyProduct.price}
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h5 className="my-0">{buyProduct.name}</h5>
                  <small className="text-muted">{buyProduct.desc}</small>
                </div>
                <span className="text-muted">IDR{buyProduct.price}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (IDR)</span>
                <strong>IDR{buyProduct.price}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buy;
