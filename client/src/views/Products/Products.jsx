import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlinePlus } from "react-icons/ai";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Products = ({ user, setUser, addCart, setAddCart }) => {
  const [products, setProducts] = React.useState([]);
  const url = "https://api-limeloots.herokuapp.com";

  React.useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleCart = () => {
    setAddCart(addCart + 1);
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
        <h1>Products</h1>
        <div className="row px-2 py-2">
          {products.map((product) => {
            return (
              <div className="card" style={{ width: 350 }}>
                <Link
                  to={`/products/${product.id}`}
                  className="text-decoration-none text-black"
                >
                  <img
                    src="https://spoonacular.com/recipeImages/579247-556x370.jpg"
                    alt="productImage"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.desc}</p>
                  </div>
                </Link>
                <div className="card-footer">
                  <button
                    type="button"
                    onClick={handleCart}
                    className="btn btn-sm btn-warning me-3"
                  >
                    <AiOutlineShoppingCart fontSize={16} /> <AiOutlinePlus />
                  </button>
                  <Link
                    to={`/products/buy/${product.id}`}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
