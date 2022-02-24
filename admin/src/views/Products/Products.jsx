import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Header, Sidebar, Footer } from "../../components";

const Products = () => {
  const [products, setProducts] = useState([]);

  // GET PRODUCTS
  const getProducts = async () => {
    await axios({
      method: "GET",
      url: "http://localhost:5000/products",
    })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // DELETE PRODUCT BY ID
  const deleteProduct = async (e, id) => {
    e.preventDefault();

    await axios({
      method: "DELETE",
      url: `http://localhost:5000/products/delete/${id}`,
      data: {
        id,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <>
      <Header />
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Link className="btn btn-dark btn-sm mt-4" to="/admin/products/create">
          Create Product
        </Link>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <table className="table table-hover responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Desc</th>
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
                <th>User</th>
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
                    <td>{product.user.name}</td>
                    <td>
                      <Link
                        to={`detail/${product.id}`}
                        className="btn btn-outline-info btn-sm"
                      >
                        View
                      </Link>
                      <Link
                        to={`edit/${product.id}`}
                        className="btn btn-outline-warning btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={deleteProduct}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
