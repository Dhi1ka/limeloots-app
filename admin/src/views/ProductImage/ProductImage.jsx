import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const ProductImage = () => {
  const navigate = useNavigate();
  const url = "https://api-limeloots.herokuapp.com/";
  const [images, setImage] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${url}/product-images`)
      .then((response) => setImage(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Product Images</h1>
          <Link
            to="/admin/product-images/create"
            className=" mb-2 btn btn-sm btn-primary"
          >
            <FcPlus fontSize={20} /> Create New Product Image
          </Link>
          <table className="table table-bordered table-hover table-sm table-responsive table-striped border-secondary">
            <thead>
              <tr>
                <th>No</th>
                <th>File Name</th>
                <th>File Size</th>
                <th>File Type</th>
                <th>Primary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {images.map((image) => {
                return (
                  <tr key={image.id}>
                    <td></td>
                    <td>{image.fileName}</td>
                    <td>{image.fileSize}</td>
                    <td>{image.fileType}</td>
                    <td>{image.primary}</td>
                    <td>
                      <Link
                        to={`/admin/product-images/edit/${image.id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        <FaPencilAlt />
                      </Link>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={(e) => {
                          e.preventDefault();

                          const user = JSON.parse(localStorage.getItem("user"));

                          const config = {
                            headers: {
                              access_token: user.access_token,
                            },
                          };

                          swal({
                            title: "Are you sure?",
                            text: "This product image will be deleted!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          })
                            .then((willDelete) => {
                              if (willDelete) {
                                axios.delete(
                                  `${url}/product-images/delete/${image.id}`,
                                  config,
                                );
                                swal(
                                  "Successful! The Product Image has been deleted!",
                                  {
                                    icon: "success",
                                  },
                                );
                                navigate("/admin/product-images");
                              } else {
                                return;
                              }
                            })
                            .catch((error) => console.error(error));
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
