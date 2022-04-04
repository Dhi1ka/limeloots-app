import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = ({ user, setUser }) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <h1>Cart</h1>
      <Footer />
    </div>
  );
};

export default Cart;
