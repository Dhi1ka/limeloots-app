import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./views/Dashboard";
import Products from "./views/Products/Products";
import Orders from "./views/Orders/Orders";
import ProductImage from "./views/ProductImage/ProductImage";
import CreateProduct from "./views/Products/CreateProduct";
import EditProduct from "./views/Products/EditProduct";
import ShoppingCart from "./views/ShoppingCart/ShoppingCart";
import CreateShoppingCart from "./views/ShoppingCart/CreateShoppingCart";
import EditShoppingCart from "./views/ShoppingCart/EditShoppingCart";
import CreateOrder from "./views/Orders/CreateOrder";
import EditOrder from "./views/Orders/EditOrder";
import "./main.css";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Routes>
      {/* Auth Route */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/register" element={<Register />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      {/* Product Route */}
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/products/create" element={<CreateProduct />} />
      <Route path="/admin/products/edit/:id" element={<EditProduct />} />
      {/* ShoppingCart Route */}
      <Route path="/admin/shopping-carts" element={<ShoppingCart />} />
      <Route
        path="/admin/shopping-carts/create"
        element={<CreateShoppingCart />}
      />
      <Route
        path="/admin/shopping-carts/edit/:id"
        element={<EditShoppingCart />}
      />
      {/* Order Route */}
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/orders/create" element={<CreateOrder />} />
      <Route path="/admin/orders/edit/:id" element={<EditOrder />} />

      <Route path="/admin/product-images" element={<ProductImage />} />
      <Route path="/*" element={<Dashboard user={user} setUser={setUser} />} />
    </Routes>
  );
};

export default App;
