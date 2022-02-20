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
} from "./views";
import { Header, Sidebar, Footer } from "./components";
import "./assets/css/dashboard.css";
import "./assets/css/bootstrap.css";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:id" element={<DetailProduct />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/account-setting" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
