import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const EditLineItem = () => {
  const url = "https://api-limeloots.herokuapp.com/";
  const navigate = useNavigate();
  const { id } = useParams();
  const [lineItem, setLineItem] = React.useState({
    qty: "",
    status: "",
    orderName: "",
  });

  React.useEffect(() => {
    axios
      .get(`${url}/line-items/detail/${id}`)
      .then((response) => setLineItem(response.data))
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

    axios
      .put(`${url}/line-items/edit/${id}`, lineItem, config)
      .then((response) => {
        setLineItem(response.data);
        swal("Successful!", "The Line Item has been updated!", "success");
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
        <div className="col">
          <Navbar />
          <h1>Edit Line Item</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="qty"
                id="qty"
                placeholder="Qty"
                value={lineItem.qty}
                onChange={(e) =>
                  setLineItem({
                    ...lineItem,
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
                value={lineItem.status}
                onChange={(e) =>
                  setLineItem({ ...lineItem, status: e.target.value })
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
                value={lineItem.orderName}
                onChange={(e) =>
                  setLineItem({
                    ...lineItem,
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

export default EditLineItem;
