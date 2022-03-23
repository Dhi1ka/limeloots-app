import * as React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const CreateProduct = () => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [postProduct, setPostProduct] = React.useState({
    name: "",
    desc: "",
    price: "",
    stock: "",
    expire: "",
    weight: "",
    category: "",
    brand: "",
    condition: "",
    totalSold: "",
    rating: "",
    views: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/products/create`)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));

    navigate("/admin/products");
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Create Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                required
                style={{ height: 100 }}
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                required
              />
              <label htmlFor="price">Price</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="stock"
                id="stock"
                placeholder="Stocks"
                required
              />
              <label htmlFor="stock">Stocks</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="date"
                name="expire"
                id="expire"
                placeholder="Expire"
                required
              />
              <label htmlFor="expire">Expire</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight"
                required
              />
              <label htmlFor="weight">Weight</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <label htmlFor="category">Category</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="brand"
                id="brand"
                placeholder="Brand"
              />
              <label htmlFor="brand">Brand</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="condition"
                id="condition"
                placeholder="Condition"
                required
              />
              <label htmlFor="condition">Condition</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="totalSold"
                id="totalSold"
                placeholder="Total Sold"
                required
              />
              <label htmlFor="totalSold">Total Sold</label>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <input
                type="range"
                className="form-range"
                name="rating"
                id="rating"
                min="0"
                max="5"
                required
              />
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="views"
                id="views"
                placeholder="Views"
                required
              />
              <label htmlFor="views">Views</label>
            </div>
            <div>
              <button type="submit" className="btn btn-primary me-2">
                Save
              </button>
              <Link to="/admin/products" className="btn btn-warning">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
