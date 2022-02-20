const lineItemRouter = require("express").Router();
const { LineItemController } = require("../controllers");

// CRUD lineItem
lineItemRouter.get("/", LineItemController.getAllLineItems);
lineItemRouter.get("/detail/:id", LineItemController.detailLineItem);
lineItemRouter.get("/search", LineItemController.searchLineItem);
lineItemRouter.post("/create", LineItemController.createLineItem);
lineItemRouter.put("/edit/:id", LineItemController.editLineItem);
lineItemRouter.delete("/delete/:id", LineItemController.deleteLineItem);

module.exports = lineItemRouter;
