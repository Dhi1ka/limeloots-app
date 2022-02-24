import React from "react";
import { Link } from "react-router-dom";

import { Header, Sidebar, Footer } from "../../components";

const EditProduct = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Link className="btn btn-dark btn-sm mt-4" to="/admin/products">
          Back
        </Link>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1>Create Product</h1>
        </div>
        <form>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Product Name"
              type="text"
              defaultValue={`Lime`}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <input
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter Product Description"
              type="textarea"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="price">
              Price
            </label>
            <input
              className="form-control"
              id="price"
              name="price"
              type="number"
              placeholder="Enter Product Price"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="stock">
              Stock
            </label>
            <input
              className="form-control"
              id="stock"
              name="stock"
              type="number"
              placeholder="Enter Product Stock"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="expire">
              Expire
            </label>
            <input
              className="form-control"
              id="expire"
              name="expire"
              type="date"
              placeholder="Enter Product expire"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="weight">
              Weight
            </label>
            <input
              className="form-control"
              id="weight"
              name="weight"
              type="number"
              placeholder="Enter Product Weight"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <select className="form-select" id="category" name="category">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="brand">
              Brand
            </label>
            <input
              className="form-control"
              id="brand"
              name="brand"
              type="text"
              placeholder="Enter Product Brand"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="condition">
              Condition
            </label>
            <input
              className="form-control"
              id="condition"
              name="condition"
              type="text"
              placeholder="Enter Product Condition"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="totalSold">
              Total Sold
            </label>
            <input
              className="form-control"
              id="totalSold"
              name="totalSold"
              type="number"
              placeholder="Enter Product Total Sold"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="rating">
              Rating
            </label>
            <input
              className="form-control"
              id="rating"
              name="rating"
              type="number"
              placeholder="Enter Product Rating"
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="views">
              Views
            </label>
            <input
              className="form-control"
              id="views"
              name="views"
              type="number"
              placeholder="Enter Product Views"
            />
          </div>
          <button className="btn btn-outline" type="button">
            Update
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default EditProduct;
