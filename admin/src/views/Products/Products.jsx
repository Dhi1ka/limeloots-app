import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import "./product.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const url = "http://localhost:5000";

  React.useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Products</h1>
          <Link
            to="/admin/products/create"
            className=" mb-2 btn btn-sm btn-primary"
          >
            <FcPlus fontSize={20} /> Create New Product
          </Link>
          <table className="table table-bordered table-hover table-sm table-responsive table-striped border-secondary">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Expire</th>
                <th>Weight</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Condition</th>
                <th>Total Sold</th>
                <th>Rating</th>
                <th>Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td></td>
                    <td>{product.name}</td>
                    <td>{product.desc}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.expire}</td>
                    <td>{product.weight}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>{product.condition}</td>
                    <td>{product.totalSold}</td>
                    <td>{product.rating}</td>
                    <td>{product.views}</td>
                    <td>
                      <button className="btn btn-sm btn-warning">
                        <FaPencilAlt />
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
