import React from "react";
import { Routes, Route } from "react-router-dom";

import "./main.css";
import Home from "./views/Home";
import Products from "./views/Products/Products";
import Cart from "./views/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./views/NotFound.jsx";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />} />
      <Route
        path="/products"
        element={<Products user={user} setUser={setUser} />}
      />
      <Route path="/cart" element={<Cart user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
