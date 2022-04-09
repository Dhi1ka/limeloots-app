import React from "react";
import { Routes, Route } from "react-router-dom";

import "./main.css";
import Home from "./views/Home";
import Products from "./views/Products/Products";
import Product from "./views/Products/Product";
import Cart from "./views/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./views/NotFound.jsx";
import Buy from "./views/Buy";

const App = () => {
  const [user, setUser] = React.useState(null);
  const [addCart, setAddCart] = React.useState(0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            user={user}
            setUser={setUser}
            addCart={addCart}
            setAddCart={setAddCart}
          />
        }
      />
      <Route
        path="/products"
        element={
          <Products
            user={user}
            setUser={setUser}
            addCart={addCart}
            setAddCart={setAddCart}
          />
        }
      />
      <Route
        path="/products/:id"
        element={
          <Product
            user={user}
            setUser={setUser}
            addCart={addCart}
            setAddCart={setAddCart}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            user={user}
            setUser={setUser}
            addCart={addCart}
            setAddCart={setAddCart}
          />
        }
      />
      <Route
        path="/products/buy/:id"
        element={
          <Buy
            user={user}
            setUser={setUser}
            addCart={addCart}
            setAddCart={setAddCart}
          />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
