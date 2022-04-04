import React from "react";
import axios from "axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Products = ({ user, setUser }) => {
  const [products, setProducts] = React.useState([]);
  const url = "http://localhost:5000";

  React.useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <h1>Products</h1>
      {products.map((product) => {
        return <p>{JSON.stringify(product)}</p>;
      })}
      <Footer />
    </div>
  );
};

export default Products;
