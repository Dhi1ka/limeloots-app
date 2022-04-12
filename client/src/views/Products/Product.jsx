import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlinePlus,
} from "react-icons/ai";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Product = ({ user, setUser, addCart, setAddCart }) => {
  const [product, setProduct] = React.useState([]);
  const url = "https://api-limeloots.herokuapp.com";
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`${url}/products/detail/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

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
        <Link to="/" className="btn btn-sm btn-warning me-2 my-2">
          <AiOutlineHome fontSize={16} />
        </Link>
        <Link to="/products" className="btn btn-sm btn-secondary">
          <AiOutlineArrowLeft fontSize={16} /> Back
        </Link>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <p>IDR{product.price}</p>
        <button
          type="button"
          onClick={handleCart}
          className="btn btn-sm btn-warning me-3"
        >
          <AiOutlineShoppingCart fontSize={16} /> <AiOutlinePlus />
        </button>
        <Link to={`/products/buy/${product.id}`} className="btn btn-primary">
          Buy Now
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Product;
