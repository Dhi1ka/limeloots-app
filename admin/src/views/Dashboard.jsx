import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const loginUser = localStorage.getItem("user", JSON.parse(user));
    if (!loginUser) {
      navigate("/admin/login");
    } else {
      setUser(loginUser);
    }
  });

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
