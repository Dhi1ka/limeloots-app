import React from "react";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  const product = (id) => {};
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Link className="btn btn-dark btn-sm mt-4" to="/products">
        Back
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>Detail Product</h1>
      </div>
    </main>
  );
};

export default DetailProduct;
