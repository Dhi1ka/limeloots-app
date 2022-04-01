const shoppingCartRouter = require("express").Router();
const { ShoppingCartController } = require("../controllers");
const { authentication } = require("../middleware/auth");

// CRUD shoppingCart
shoppingCartRouter.get("/", ShoppingCartController.getAllShoppingCarts);
shoppingCartRouter.get(
  "/detail/:id",
  ShoppingCartController.detailShoppingCart,
);
shoppingCartRouter.get("/search", ShoppingCartController.searchShoppingCart);
shoppingCartRouter.post(
  "/create",
  authentication,
  ShoppingCartController.createShoppingCart,
);
shoppingCartRouter.put(
  "/edit/:id",
  authentication,
  ShoppingCartController.editShoppingCart,
);
shoppingCartRouter.delete(
  "/delete/:id",
  authentication,
  ShoppingCartController.deleteShoppingCart,
);

module.exports = shoppingCartRouter;
