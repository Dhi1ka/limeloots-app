import React from "react";
import { Header, Sidebar, Footer } from "../components";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1>Dashboard</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
