import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const EditProductImage = () => {
  const url = "http://localhost:5000";
  const { id } = useParams();
  const navigate = useNavigate();
  const [productImage, setProductImage] = React.useState({
    fileName: "",
    fileSize: "",
    fileType: "",
    primary: "",
  });

  React.useEffect(() => {
    axios
      .get(`${url}/product-images/detail/${id}`)
      .then((response) => setProductImage(response.data))
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
      .put(`${url}/product-images/edit/${id}`, productImage, config)
      .then((response) => {
        setProductImage(response.data);
        swal("Successful!", "The Product Image has been updated!", "success");
        navigate("/admin/product-images");
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
        navigate("/admin/product-images");
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
          <h1>Edit Product Image</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="fileName"
                id="fileName"
                placeholder="File Name"
                value={productImage.fileName}
                onChange={(e) =>
                  setProductImage({
                    ...productImage,
                    fileName: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="fileName">File Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                name="fileSize"
                id="fileSize"
                placeholder="File Size"
                value={productImage.fileSize}
                onChange={(e) =>
                  setProductImage({
                    ...productImage,
                    fileSize: e.target.value,
                  })
                }
                required
              />
              <label htmlFor="fileSize">File Size</label>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="fileType">
                File Type
              </label>
              <select
                className="form-select"
                name="fileType"
                id="fileType"
                value={productImage.fileType}
                onChange={(e) =>
                  setProductImage({
                    ...productImage,
                    fileType: e.target.value,
                  })
                }
              >
                <option value="Select One.." selected disabled>
                  Select One..
                </option>
                <option value=".jpg">JPG</option>
                <option value=".png">PNG</option>
              </select>
            </div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="primary"
                id="primary"
                value={productImage.primary}
                onChange={(e) =>
                  setProductImage({
                    ...productImage,
                    primary: e.target.value,
                  })
                }
              />
              <label className="form-check-label" htmlFor="primary">
                Primary
              </label>
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

export default EditProductImage;
