import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = ({ user, setUser }) => {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="container text-center">
        <h1>Welcome to Limeloots</h1>
        <p>Search our products here</p>
        <form className="d-flex align-items-center justify-content-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Our Products.."
            className="form-control w-25"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Home;
