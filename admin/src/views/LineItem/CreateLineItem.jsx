import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const CreateLineItem = () => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [postLineItem, setPostLineItem] = React.useState({
    qty: "",
    status: "",
    orderName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/line-items/create`, postLineItem)
      .then((response) => {
        setPostLineItem(response.data);
        swal("Successful!", "The Line Item has been saved!", "success");
        navigate("/admin/line-items");
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
        navigate("/admin/line-items");
      } else {
        return;
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div>
          <Navbar />
          <h1>CreateLineItem</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="qty"
                id="qty"
                placeholder="Qty"
                onChange={(e) =>
                  setPostLineItem({
                    ...postLineItem,
                    qty: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="qty">Qty</label>
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
                  setPostLineItem({ ...postLineItem, status: e.target.value })
                }
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value="Cart">Cart</option>
                <option value="Checkout">Checkout</option>
                <option value="Ordered">Ordered</option>
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="orderName"
                id="orderName"
                placeholder="Order Name"
                onChange={(e) =>
                  setPostLineItem({
                    ...postLineItem,
                    orderName: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="orderName">Order Name</label>
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

export default CreateLineItem;
