import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Admin,
  Products,
  DetailProduct,
  CreateProduct,
  EditProduct,
  Profile,
  Account,
  NotFound,
} from "./views";
import "./assets/css/dashboard.css";
import "./assets/css/bootstrap.css";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/dashboard" element={<Admin />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/products/detail/:id" element={<DetailProduct />} />
        <Route path="/admin/products/create" element={<CreateProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/account-setting" element={<Account />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
