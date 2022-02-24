import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Header, Sidebar, Footer } from "../../components";

const DetailProduct = () => {
  const [product, setProduct] = useState([]);

  const getProductById = async (id) => {
    await axios
      .get(`localhost:5000/products/detail/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProductById(8);
  }, [product]);

  return (
    <>
      <Header />
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Link className="btn btn-dark btn-sm mt-4" to="/admin/products">
          Back
        </Link>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1>Detail Product</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailProduct;
