import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const EditOrder = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5000";
  const { id } = useParams();
  const [order, setOrder] = React.useState({
    createdOn: "",
    subtotal: "",
    discount: "",
    tax: "",
    totalDue: "",
    totalQty: "",
    payTrxNumber: "",
    city: "",
    address: "",
    status: "",
  });

  React.useEffect(() => {
    axios
      .get(`${url}/orders/detail/${id}`)
      .then((response) => setOrder(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const config = {
      headers: {
        access_token: user.access_token,
      },
    };

    swal({
      title: "Are you sure want to update?",
      text: "You will update the change!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUpdate) => {
      if (willUpdate) {
        axios
          .put(`${url}/orders/edit/${id}`, order, config)
          .then((response) => {
            setOrder(response.data);
            swal("Successful!", "The Order has been updated!", "success");
            navigate("/admin/orders");
          })
          .catch((error) => console.error(error));
      } else {
        return;
      }
    });
  };
  const handleBack = (e) => {
    e.preventDefault();

    swal({
      title: "Are you sure want to back?",
      text: "The Change will never saved!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willBack) => {
      if (willBack) {
        navigate("/admin/orders");
      } else {
        return;
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Edit Order</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="date"
                name="createdOn"
                id="createdOn"
                placeholder="Created On"
                value={order.createdOn}
                onChange={(e) =>
                  setOrder({ ...order, createdOn: e.target.value })
                }
                required
              />
              <label htmlFor="createdOn">Created On</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="subtotal"
                id="subtotal"
                placeholder="Subtotal"
                value={order.subtotal}
                onChange={(e) =>
                  setOrder({ ...order, subtotal: e.target.value })
                }
                required
              />
              <label htmlFor="subtotal">Subtotal</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="discount"
                id="discount"
                placeholder="Discount"
                value={order.discount}
                onChange={(e) =>
                  setOrder({ ...order, discount: e.target.value })
                }
                required
              />
              <label htmlFor="discount">Discount</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="tax"
                id="tax"
                placeholder="Tax"
                value={order.tax}
                onChange={(e) => setOrder({ ...order, tax: e.target.value })}
                required
              />
              <label htmlFor="tax">Tax</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="totalDue"
                id="totalDue"
                placeholder="Total Due"
                value={order.totalDue}
                onChange={(e) =>
                  setOrder({ ...order, totalDue: e.target.value })
                }
                required
              />
              <label htmlFor="totalDue">Total Due</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="totalQty"
                id="totalQty"
                placeholder="Total Qty"
                value={order.totalQty}
                onChange={(e) =>
                  setOrder({ ...order, totalQty: e.target.value })
                }
                required
              />
              <label htmlFor="totalQty">Total Qty</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="payTrxNumber"
                id="payTrxNumber"
                placeholder="Payment Transaction Number"
                value={order.payTrxNumber}
                onChange={(e) =>
                  setOrder({ ...order, payTrxNumber: e.target.value })
                }
                required
              />
              <label htmlFor="payTrxNumber">Payment Transaction Number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="city"
                id="city"
                placeholder="City"
                value={order.city}
                onChange={(e) => setOrder({ ...order, city: e.target.value })}
                required
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                value={order.address}
                onChange={(e) =>
                  setOrder({ ...order, address: e.target.value })
                }
                required
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="status">
                Status
              </label>
              <select
                className="form-select"
                name="status"
                id="status"
                value={order.status}
                onChange={(e) => setOrder({ ...order, status: e.target.value })}
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value="Open">Open</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Paid">Paid</option>
                <option value="Shipping">Shipping</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-primary me-2">
                Update
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-warning"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
