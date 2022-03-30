import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const url = "http://localhost:5000";

  React.useEffect(() => {
    axios
      .get(`${url}/shopping-carts`)
      .then((response) => setShoppingCart(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Shopping Cart</h1>
          <Link
            to="/admin/shopping-carts/create"
            className=" mb-2 btn btn-sm btn-primary"
          >
            <FcPlus fontSize={20} /> Create New Shopping Cart
          </Link>
          <table className="table table-bordered table-hover table-sm table-responsive table-striped border-secondary">
            <thead>
              <tr>
                <th>No</th>
                <th>Created On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map((cart) => {
                return (
                  <tr key={cart.id}>
                    <td></td>
                    <td>{cart.createdOn}</td>
                    <td>{cart.status}</td>
                    <td>
                      <Link
                        to={`/admin/shopping-carts/edit/${cart.id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        <FaPencilAlt />
                      </Link>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={(e) => {
                          e.preventDefault();

                          swal({
                            title: "Are you sure?",
                            text: "This shopping cart will be deleted!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                            .then((willDelete) => {
                              if (willDelete) {
                                axios.delete(
                                  `${url}/shopping-carts/delete/${cart.id}`,
                                );
                                swal(
                                  "Successful! The Shopping Cart has been deleted!",
                                  {
                                    icon: "success",
                                  },
                                );
                                navigate("/admin/shopping-carts");
                              } else {
                                return;
                              }
                            })
                            .catch((error) => console.error(error));
                        }}
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

export default ShoppingCart;
