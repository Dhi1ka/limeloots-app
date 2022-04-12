import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const CreateShoppingCart = () => {
  const url = "https://api-limeloots.herokuapp.com";
  const navigate = useNavigate();
  const [postCart, setPostCart] = React.useState({
    createdOn: "",
    status: "",
    user: "",
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
      .post(`${url}/shopping-carts/create`, postCart, config)
      .then((response) => {
        setPostCart(response.data);
        swal("Successful!", "The Shopping Cart has been saved!", "success");
        navigate("/admin/shopping-carts");
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
        navigate("/admin/shopping-carts");
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
          <h1>Create Shopping Cart</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="date"
                name="createdOn"
                id="createdOn"
                placeholder="Create On"
                onChange={(e) =>
                  setPostCart({ ...postCart, createdOn: e.target.value })
                }
                required
              />
              <label htmlFor="createOn">Create On</label>
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
                  setPostCart({ ...postCart, status: e.target.value })
                }
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value="Open">Open</option>
                <option value="Close">Close</option>
              </select>
            </div>
            <input
              type="hidden"
              name="user"
              id="user"
              onChange={(e) =>
                setPostCart({ ...postCart, user: e.target.value })
              }
            />
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

export default CreateShoppingCart;
