import * as React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const EditProduct = () => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = React.useState({
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
  });

  React.useEffect(() => {
    axios
      .get(`${url}/products/detail/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    swal({
      title: "Are you sure want to update?",
      text: "You will update the change!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUpdate) => {
      if (willUpdate) {
        axios
          .put(`${url}/products/edit/${id}`, product)
          .then((response) => {
            setProduct(response.data);
            swal("Successful!", "The Product has been updated!", "success");
            navigate("/admin/products");
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
          <h1>Edit Product</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
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
                value={product.desc}
                onChange={(e) =>
                  setProduct({
                    ...product,
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
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
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
                value={product.stock}
                onChange={(e) =>
                  setProduct({ ...product, stock: e.target.value })
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
                defaultValue={product.expire}
                onChange={(e) =>
                  setProduct({ ...product, expire: e.target.value })
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
                value={product.weight}
                onChange={(e) =>
                  setProduct({ ...product, weight: e.target.value })
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
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              >
                <option value="Jam" selected>
                  Jam
                </option>
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
                value={product.brand}
                onChange={(e) =>
                  setProduct({ ...product, brand: e.target.value })
                }
              >
                <option value="Marawa" selected>
                  Marawa
                </option>
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
                value={product.condition}
                onChange={(e) =>
                  setProduct({ ...product, condition: e.target.value })
                }
              >
                <option value="Good" selected>
                  Good
                </option>
                <option value="Bad">Bad</option>
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="totalSold"
                id="totalSold"
                placeholder="Total Sold"
                value={product.totalSold}
                onChange={(e) =>
                  setProduct({ ...product, totalSold: e.target.value })
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
                value={product.rating}
                onChange={(e) =>
                  setProduct({ ...product, rating: e.target.value })
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
                value={product.views}
                onChange={(e) =>
                  setProduct({ ...product, views: e.target.value })
                }
                required
              />
              <label htmlFor="views">Views</label>
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

export default EditProduct;
