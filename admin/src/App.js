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
import CreateProductImage from "./views/ProductImage/CreateProductImage";
import EditProductImage from "./views/ProductImage/EditProductImage";
import LineItem from "./views/LineItem/LineItem";
import CreateLineItem from "./views/LineItem/CreateLineItem";
import EditLineItem from "./views/LineItem/EditLineItem";
import "./main.css";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Routes>
      {/* Auth Route */}
      <Route
        path="/admin/login"
        element={<Login user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/register"
        element={<Register user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/dashboard"
        element={<Dashboard user={user} setUser={setUser} />}
      />
      {/* Product Route */}
      <Route
        path="/admin/products"
        element={<Products user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/products/create"
        element={<CreateProduct user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/products/edit/:id"
        element={<EditProduct user={user} setUser={setUser} />}
      />
      {/* ShoppingCart Route */}
      <Route
        path="/admin/shopping-carts"
        element={<ShoppingCart user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/shopping-carts/create"
        element={<CreateShoppingCart user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/shopping-carts/edit/:id"
        element={<EditShoppingCart user={user} setUser={setUser} />}
      />
      {/* Order Route */}
      <Route
        path="/admin/orders"
        element={<Orders user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/orders/create"
        element={<CreateOrder user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/orders/edit/:id"
        element={<EditOrder user={user} setUser={setUser} />}
      />
      {/* Product Image Route */}
      <Route
        path="/admin/product-images"
        element={<ProductImage user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/product-images/create"
        element={<CreateProductImage user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/product-images/edit/:id"
        element={<EditProductImage user={user} setUser={setUser} />}
      />
      {/* Line Item Route */}
      <Route
        path="/admin/line-items"
        element={<LineItem user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/line-items/create"
        element={<CreateLineItem user={user} setUser={setUser} />}
      />
      <Route
        path="/admin/line-items/edit/:id"
        element={<EditLineItem user={user} setUser={setUser} />}
      />
      <Route path="/*" element={<Dashboard user={user} setUser={setUser} />} />
    </Routes>
  );
};

export default App;
