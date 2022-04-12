const lineItemRouter = require("express").Router();
const { LineItemController } = require("../controllers");
const { authentication } = require("../middleware/auth");

// CRUD lineItem
lineItemRouter.get("/", LineItemController.getAllLineItems);
lineItemRouter.get("/detail/:id", LineItemController.detailLineItem);
lineItemRouter.get("/search", LineItemController.searchLineItem);
lineItemRouter.post(
  "/create",
  authentication,
  LineItemController.createLineItem,
);
lineItemRouter.put(
  "/edit/:id",
  authentication,
  LineItemController.editLineItem,
);
lineItemRouter.delete(
  "/delete/:id",
  authentication,
  LineItemController.deleteLineItem,
);

module.exports = lineItemRouter;
