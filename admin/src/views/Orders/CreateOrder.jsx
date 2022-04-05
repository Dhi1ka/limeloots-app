import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const CreateOrder = () => {
  const navigate = useNavigate();
  const url = "http://localhost:5000";
  const [postOrder, setPostOrder] = React.useState({
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const config = {
      headers: {
        access_token: user.access_token,
      },
    };

    axios
      .post(`${url}/orders/create`, postOrder, config)
      .then((response) => {
        setPostOrder(response.data);
        swal("Successful!", "The Order has been saved!", "success");
        navigate("/admin/orders");
      })
      .catch((error) => console.error(error));
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
          <h1>Create Order</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="date"
                name="createdOn"
                id="createdOn"
                placeholder="Created On"
                onChange={(e) =>
                  setPostOrder({ ...postOrder, createdOn: e.target.value })
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, subtotal: e.target.value })
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, discount: e.target.value })
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, tax: e.target.value })
                }
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, totalDue: e.target.value })
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, totalQty: e.target.value })
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, payTrxNumber: e.target.value })
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, city: e.target.value })
                }
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, address: e.target.value })
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
                onChange={(e) =>
                  setPostOrder({ ...postOrder, status: e.target.value })
                }
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
                Save
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

export default CreateOrder;
