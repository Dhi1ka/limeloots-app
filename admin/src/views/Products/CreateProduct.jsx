import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const CreateProduct = ({ user, setUser }) => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [postProduct, setPostProduct] = React.useState({
    name: "",
    desc: "",
    price: "",
    stock: "",
    expire: "",
    weight: "",
    category: "",
    brand: "",
    condition: "",
    totalSold: "",
    rating: "",
    views: "",
    productImage: "",
    user: "",
  });

  const [image, setImage] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${url}/product-images`)
      .then((response) => setImage(response.data))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    const loginUser = localStorage.getItem("user", JSON.parse(user));
    if (!loginUser) {
      navigate("/admin/login");
    } else {
      setUser(loginUser);
    }
  }, [navigate, user, setUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const config = {
      headers: {
        access_token: user.access_token,
      },
    };

    axios
      .post(`${url}/products/create`, postProduct, config)
      .then((response) => {
        setPostProduct(response.data);
        swal("Successful!", "The Product has been saved!", "success");
        navigate("/admin/products");
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
        navigate("/admin/products");
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
          <h1>Create Product</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, name: e.target.value })
                }
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                type="text"
                name="desc"
                id="desc"
                placeholder="Description"
                onChange={(e) =>
                  setPostProduct({
                    ...postProduct,
                    desc: e.target.value,
                  })
                }
                required
                style={{ height: 100 }}
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, price: e.target.value })
                }
                required
              />
              <label htmlFor="price">Price</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="stock"
                id="stock"
                placeholder="Stocks"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, stock: e.target.value })
                }
                required
              />
              <label htmlFor="stock">Stocks</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="date"
                name="expire"
                id="expire"
                placeholder="Expire"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, expire: e.target.value })
                }
                required
              />
              <label htmlFor="expire">Expire</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, weight: e.target.value })
                }
                required
              />
              <label htmlFor="weight">Weight</label>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="category">
                Category
              </label>
              <select
                className="form-select"
                name="category"
                id="category"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, category: e.target.value })
                }
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value="Jam">Jam</option>
                <option value="Cream">Cream</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="brand">
                Brand
              </label>
              <select
                className="form-select"
                name="brand"
                id="brand"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, brand: e.target.value })
                }
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value="Marawa">Marawa</option>
                <option value="Simply Kaya">Simply Kaya</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="condition">
                Condition
              </label>
              <select
                className="form-select"
                name="condition"
                id="condition"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, condition: e.target.value })
                }
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value="New">New</option>
                <option value="Good">Good</option>
                <option value="Fresh">Fresh</option>
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="totalSold"
                id="totalSold"
                placeholder="Total Sold"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, totalSold: e.target.value })
                }
                required
              />
              <label htmlFor="totalSold">Total Sold</label>
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <input
                type="range"
                className="form-range"
                name="rating"
                id="rating"
                step="0.1"
                max="5"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, rating: e.target.value })
                }
                required
              />
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="views"
                id="views"
                placeholder="Views"
                onChange={(e) =>
                  setPostProduct({ ...postProduct, views: e.target.value })
                }
                required
              />
              <label htmlFor="views">Views</label>
            </div>
            <div>
              <label htmlFor="productImage" className="form-label">
                Product Image
              </label>
              <select
                className="form-select"
                name="productImage"
                id="productImage"
                onChange={(e) =>
                  setPostProduct({
                    ...postProduct,
                    productImage: e.target.value,
                  })
                }
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                {image.map((img) => {
                  return <option value={img.fileName}>{img.fileName}</option>;
                })}
              </select>
            </div>
            <input
              type="hidden"
              name="user"
              id="user"
              onChange={(e) =>
                setPostProduct({ ...postProduct, user: e.target.value })
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

export default CreateProduct;
