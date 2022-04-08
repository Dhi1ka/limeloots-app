import React from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = ({ user, setUser }) => {
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

  return (
    <>
      <Navbar user={user} setUser={setUser} />
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
            Search
          </button>
        </form>
        <div className="row px-2 py-2">
          {searchInput.length > 1
            ? searchFilter.map((item) => {
                return (
                  <Link
                    to={`/products/${item.id}`}
                    className="col-md-4 text-decoration-none text-black"
                  >
                    <div className="card" style={{ width: 350 }}>
                      <img
                        src={item.productImage}
                        alt=""
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.desc}</p>
                        <a href="#" className="btn btn-primary">
                          Buy IDR{item.price}
                        </a>
                      </div>
                    </div>
                  </Link>
                );
              })
            : products.map((product) => {
                return (
                  <Link
                    to={`/products/${product.id}`}
                    className="col-md-4 text-decoration-none text-black"
                  >
                    <div className="card" style={{ width: 350 }}>
                      <img
                        src={product.productImage}
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
