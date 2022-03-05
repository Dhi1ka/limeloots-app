import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./views/Dashboard";
import Products from "./views/Products/Products";
import Orders from "./views/Orders/Orders";
import Members from "./views/Members/Members";
import NotFound from "./views/NotFound";
import "./main.css";

const App = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/register" element={<Register />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/members" element={<Members />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
