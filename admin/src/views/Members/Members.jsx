import React from "react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Members = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <div className="col">
          <Navbar />
          <h1>Members</h1>
        </div>
      </div>
    </div>
  );
};

export default Members;
