import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

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

  const deleteProduct = async (id) => {
    await axios({
      method: "DELETE",
      url: `http://localhost:5000/products/delete/${id}`,
      data: {
        id,
      },
    });

    response
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    products.map((product) => {
      console.log(product.id);
    });
    // console.log(deleteProduct(products));
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Link className="btn btn-dark btn-sm mt-4" to="/products/create">
        Create Product
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <Table hover responsive>
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
                    <Button
                      onClick={(e) => handleDelete(e)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </main>
  );
};

export default Products;
