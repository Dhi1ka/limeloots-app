import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = ({ user, setUser, addCart, setAddCart }) => {
  const url = "http://localhost:5000";
  const [products, setProducts] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [searchFilter, setSearchFilter] = React.useState([]);

  const searchProduct = (value) => {
    setSearchInput(value);
    if (searchInput !== "") {
      const filteredProduct = products.filter((product) => {
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setSearchFilter(filteredProduct);
    } else {
      setSearchFilter(products);
    }
  };

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
      <div className="container text-center">
        <h1>Welcome to Limeloots</h1>
        <p>Search our products here</p>
        <form className="d-flex align-items-center justify-content-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Our Products.."
            className="form-control w-25"
            onChange={(e) => searchProduct(e.target.value)}
          />
          <button className="btn btn-outline-primary" type="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <div className="row px-2 py-2">
          {searchInput.length > 1
            ? searchFilter.map((item) => {
                return (
                  <div className="col-md-4">
                    <div className="card" style={{ width: 350 }}>
                      <Link
                        to={`/products/${item.id}`}
                        className="text-decoration-none text-black"
                      >
                        <img
                          src={item.productImage}
                          alt="productImage"
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">{item.desc}</p>
                          <p>IDR{item.price}</p>
                        </div>
                        <div className="card-footer">
                          <button
                            type="button"
                            onClick={handleCart}
                            className="btn btn-sm btn-warning me-3"
                          >
                            <AiOutlineShoppingCart fontSize={16} />{" "}
                            <AiOutlinePlus />
                          </button>
                          <Link
                            to={`/products/buy/${item.id}`}
                            className="btn btn-primary"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })
            : products.map((product) => {
                return (
                  <div className="col-md-4">
                    <div className="card" style={{ width: 350 }}>
                      <Link
                        to={`/products/${product.id}`}
                        className="text-decoration-none text-black"
                      >
                        <img
                          src={product.productImage}
                          alt=""
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.desc}</p>
                          <p>IDR{product.price}</p>
                        </div>
                      </Link>
                      <div className="card-footer">
                        <button
                          type="button"
                          onClick={handleCart}
                          className="btn btn-sm btn-warning me-3"
                        >
                          <AiOutlineShoppingCart fontSize={16} />{" "}
                          <AiOutlinePlus />
                        </button>
                        <Link
                          to={`/products/buy/${product.id}`}
                          className="btn btn-primary"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
