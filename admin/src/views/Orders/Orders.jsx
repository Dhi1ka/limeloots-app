import React from "react";
import axios from "axios";
import { FcPlus } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Orders = () => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${url}/orders`)
      .then((response) => setOrders(response.data))
      .catch((error) => console.error(error));
  });

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Orders</h1>
          <Link
            to="/admin/orders/create"
            className=" mb-2 btn btn-sm btn-primary"
          >
            <FcPlus /> Create New Order
          </Link>
          <table className="table table-bordered table-hover table-sm table-responsive table-striped border-secondary">
            <thead>
              <tr>
                <th>No</th>
                <th>Created On</th>
                <th>Subtotal</th>
                <th>Discount</th>
                <th>Tax</th>
                <th>Total Due</th>
                <th>Total Qty</th>
                <th>Payment Transaction Number</th>
                <th>City</th>
                <th>Address</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr key={order.id}>
                    <td></td>
                    <td>{order.createdOn}</td>
                    <td>{order.subtotal}</td>
                    <td>{order.discount}</td>
                    <td>{order.tax}</td>
                    <td>{order.totalDue}</td>
                    <td>{order.totalQty}</td>
                    <td>{order.payTrxNumber}</td>
                    <td>{order.city}</td>
                    <td>{order.address}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link
                        to={`/admin/orders/edit/${order.id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        <FaPencilAlt />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={(e) => {
                          e.preventDefault();

                          const user = JSON.parse(localStorage.getItem("user"));

                          const config = {
                            headers: {
                              access_token: user.access_token,
                            },
                          };

                          swal({
                            title: "Are you sure?",
                            text: "This order will be deleted!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                            .then((willDelete) => {
                              if (willDelete) {
                                axios.delete(
                                  `${url}/orders/delete/${order.id}`,
                                  config,
                                );
                                swal(
                                  "Successful! The Order has been deleted!",
                                  {
                                    icon: "success",
                                  },
                                );
                                navigate("/admin/orders");
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

export default Orders;
