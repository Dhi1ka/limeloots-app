import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Buy = ({ user, setUser, addCart, setAddCart }) => {
  return (
    <div>
      <Navbar
        user={user}
        setUser={setUser}
        addCart={addCart}
        setAddCart={setAddCart}
      />
      <h1>Buy</h1>
      <Footer />
    </div>
  );
};

export default Buy;
