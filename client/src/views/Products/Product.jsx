import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Product = ({ user, setUser }) => {
  const [product, setProduct] = React.useState([]);
  const url = "http://localhost:5000";
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`${url}/products/detail/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container">
        <h1>Product</h1>
        <p>{product.name}</p>
      </div>
      <Footer />
    </>
  );
};

export default Product;
