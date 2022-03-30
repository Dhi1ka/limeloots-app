import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const CreateProductImage = () => {
  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [postProductImage, setPostProductImage] = React.useState({
    fileName: "",
    fileSize: "",
    fileType: "",
    primary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/product-images/create`, postProductImage)
      .then((response) => {
        setPostProductImage(response.data);
        swal("Successful!", "The Product Image has been saved!", "success");
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
          <h1>CreateProductImage</h1>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="fileName"
                id="fileName"
                placeholder="File Name"
                onChange={(e) =>
                  setPostProductImage({
                    ...postProductImage,
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
                onChange={(e) =>
                  setPostProductImage({
                    ...postProductImage,
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
                onChange={(e) =>
                  setPostProductImage({
                    ...postProductImage,
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
                onChange={(e) =>
                  setPostProductImage({
                    ...postProductImage,
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

export default CreateProductImage;
