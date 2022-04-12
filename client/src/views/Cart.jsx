import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = ({ user, setUser, addCart, setAddCart }) => {
  return (
    <>
      <Navbar
        user={user}
        setUser={setUser}
        addCart={addCart}
        setAddCart={setAddCart}
      />
      <div className="container">
        <h1>Shopping Cart</h1>
        <div className="row border-top border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <img
                src="https://spoonacular.com/recipeImages/579247-556x370.jpg"
                alt="productImage"
                width={200}
              />
            </div>
            <div className="col">
              <h5 className="text-muted">Category Name</h5>
              <strong>Product Name</strong>
            </div>
            <div className="col">
              <h5 className="text-muted">Price</h5>
              <strong>IDR20000</strong>
            </div>
            <div className="col">
              <h5 className="text-muted">Quantity</h5>
              <strong>1</strong>
            </div>
            <div className="col">
              <button type="button" className="btn btn-sm btn-transparent">
                X
              </button>
            </div>
          </div>
        </div>
        <div className="row border-top border-bottom">
          <div className="row align-items-center">
            <div className="col">
              <img
                src="https://spoonacular.com/recipeImages/579247-556x370.jpg"
                alt="productImage"
                width={200}
              />
            </div>
            <div className="col">
              <h5 className="text-muted">Category Name</h5>
              <strong>Product Name</strong>
            </div>
            <div className="col">
              <h5 className="text-muted">Price</h5>
              <strong>IDR20000</strong>
            </div>
            <div className="col">
              <h5 className="text-muted">Quantity</h5>
              <strong>1</strong>
            </div>
            <div className="col">
              <button type="button" className="btn btn-sm btn-transparent">
                X
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Link to="/products" className="btn btn btn-secondary me-2">
            <AiOutlineArrowLeft fontSize={16} /> Back to Products
          </Link>
          <Link to="/products/buy/all" className="btn btn btn-primary">
            <AiOutlineArrowRight fontSize={16} /> Continue to Buy
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
