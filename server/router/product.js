const productRouter = require("express").Router();
const { ProductController } = require("../controllers");
const { authentication } = require("../middleware/auth");

// CRUD PRODUCT
productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/detail/:id", ProductController.detailProduct);
productRouter.get("/search", ProductController.searchProduct);
productRouter.post("/create", authentication, ProductController.createProduct);
productRouter.put("/edit/:id", authentication, ProductController.editProduct);
productRouter.delete(
  "/delete/:id",
  authentication,
  ProductController.deleteProduct,
);

module.exports = productRouter;
