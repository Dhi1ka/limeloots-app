import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const LineItem = () => {
  const navigate = useNavigate();
  const url = "https://api-limeloots.herokuapp.com";
  const [lineItem, setLineItem] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${url}/line-items`)
      .then((response) => setLineItem(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Line Items</h1>
          <Link
            to="/admin/line-items/create"
            className=" mb-2 btn btn-sm btn-primary"
          >
            <FcPlus fontSize={20} /> Create New Line Item
          </Link>
          <table className="table table-bordered table-hover table-sm table-responsive table-striped border-secondary">
            <thead>
              <tr>
                <th>No</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Order Name</th>
                <th>Product</th>
                <th>Shopping Cart ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lineItem.map((item) => {
                return (
                  <tr key={item.id}>
                    <td></td>
                    <td>{item.qty}</td>
                    <td>{item.status}</td>
                    <td>{item.orderName}</td>
                    <td>{item.product}</td>
                    <td>{item.cartId}</td>
                    <td>
                      <Link
                        to={`/admin/line-items/edit/${item.id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        <FaPencilAlt />
                      </Link>
                      <button
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
                            text: "This line item will be deleted!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                            .then((willDelete) => {
                              if (willDelete) {
                                axios.delete(
                                  `${url}/line-items/delete/${item.id}`,
                                  config,
                                );
                                swal(
                                  "Successful! The line item has been deleted!",
                                  {
                                    icon: "success",
                                  },
                                );
                                navigate("/admin/line-items");
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

export default LineItem;
