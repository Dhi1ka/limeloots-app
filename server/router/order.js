const orderRouter = require("express").Router();
const { OrderController } = require("../controllers");

// CRUD order
orderRouter.get("/", OrderController.getAllOrders);
orderRouter.get("/detail/:id", OrderController.detailOrder);
orderRouter.get("/search", OrderController.searchOrder);
orderRouter.post("/create", OrderController.createOrder);
orderRouter.put("/edit/:id", OrderController.editOrder);
orderRouter.delete("/delete/:id", OrderController.deleteOrder);

module.exports = orderRouter;
