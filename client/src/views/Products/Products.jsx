import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container">
        <h1>Products</h1>
        <div className="row px-2 py-2">
          {products.map((product) => {
            return (
              <Link
                to={`/products/${product.id}`}
                className="col-md-4 text-decoration-none text-black"
              >
                <div className="card" style={{ width: 350 }}>
                  <img
                    src="https://spoonacular.com/recipeImages/579247-556x370.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.desc}</p>
                    <a href="#" className="btn btn-primary">
                      Buy IDR{product.price}
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
