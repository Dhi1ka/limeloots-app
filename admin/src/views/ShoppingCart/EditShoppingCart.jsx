import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const EditShoppingCart = () => {
  const url = "https://api-limeloots.herokuapp.com/";
  const navigate = useNavigate();
  const { id } = useParams();
  const [cart, setCart] = React.useState({
    createdOn: "",
    status: "",
  });

  React.useEffect(() => {
    axios
      .get(`${url}/shopping-carts/detail/${id}`)
      .then((response) => setCart(response.data))
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
          .put(`${url}/shopping-carts/edit/${id}`, cart, config)
          .then((response) => {
            setCart(response.data);
            swal(
              "Successful!",
              "The Shopping Cart has been updated!",
              "success",
            );
            navigate("/admin/shopping-carts");
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
          <h1>Edit Shopping Cart</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="date"
                name="createdOn"
                id="createdOn"
                placeholder="Create On"
                value={cart.createdOn}
                onChange={(e) =>
                  setCart({ ...cart, createdOn: e.target.value })
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
                value={cart.status}
                onChange={(e) => setCart({ ...cart, status: e.target.value })}
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value="Open">Open</option>
                <option value="Close">Close</option>
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

export default EditShoppingCart;
