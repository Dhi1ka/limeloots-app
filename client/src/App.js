import React from "react";
import { Routes, Route } from "react-router-dom";

import "./main.css";
import Home from "./views/Home";
import Products from "./views/Products/Products";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
