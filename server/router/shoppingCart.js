const shoppingCartRouter = require("express").Router();
const { ShoppingCartController } = require("../controllers");

// CRUD shoppingCart
shoppingCartRouter.get("/", ShoppingCartController.getAllShoppingCarts);
shoppingCartRouter.get(
  "/detail/:id",
  ShoppingCartController.detailShoppingCart,
);
shoppingCartRouter.get("/search", ShoppingCartController.searchShoppingCart);
shoppingCartRouter.post("/create", ShoppingCartController.createShoppingCart);
shoppingCartRouter.put("/edit/:id", ShoppingCartController.editShoppingCart);
shoppingCartRouter.delete(
  "/delete/:id",
  ShoppingCartController.deleteShoppingCart,
);

module.exports = shoppingCartRouter;
