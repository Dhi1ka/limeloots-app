import * as React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import "./product.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import swal from "sweetalert";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const url = "http://localhost:5000";

  React.useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, [setProducts]);

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
                      <Link
                        to={`/admin/products/edit/${product.id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        <FaPencilAlt />
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();

                          swal({
                            title: "Are you sure?",
                            text: "This product will be deleted!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          }).then((willDelete) => {
                            if (willDelete) {
                              axios.delete(
                                `${url}/products/delete/${product.id}`,
                              );
                              swal(
                                "Successful! The Product has been deleted!",
                                {
                                  icon: "success",
                                },
                              );
                              navigate("/admin/products");
                            } else {
                              return;
                            }
                          });
                        }}
                        className="btn btn-sm btn-danger"
                      >
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
