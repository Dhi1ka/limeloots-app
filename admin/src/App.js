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
      {/* Product Image Route */}
      <Route path="/admin/product-images" element={<ProductImage />} />
      <Route
        path="/admin/product-images/create"
        element={<CreateProductImage />}
      />
      <Route
        path="/admin/product-images/edit/:id"
        element={<EditProductImage />}
      />
      {/* Line Item Route */}
      <Route path="/admin/line-items" element={<LineItem />} />
      <Route path="/admin/line-items/create" element={<CreateLineItem />} />
      <Route path="/admin/line-items/edit/:id" element={<EditLineItem />} />
      <Route path="/*" element={<Dashboard user={user} setUser={setUser} />} />
    </Routes>
  );
};

export default App;
