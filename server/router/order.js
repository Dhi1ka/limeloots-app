const orderRouter = require("express").Router();
const { OrderController } = require("../controllers");
const { authentication } = require("../middleware/auth");

// CRUD order
orderRouter.get("/", OrderController.getAllOrders);
orderRouter.get("/detail/:id", OrderController.detailOrder);
orderRouter.get("/search", OrderController.searchOrder);
orderRouter.post("/create", authentication, OrderController.createOrder);
orderRouter.put("/edit/:id", authentication, OrderController.editOrder);
orderRouter.delete("/delete/:id", authentication, OrderController.deleteOrder);

module.exports = orderRouter;
