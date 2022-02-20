const productRouter = require("express").Router();
const { ProductController } = require("../controllers");

// CRUD PRODUCT
productRouter.get("/", ProductController.getAllProducts);
productRouter.get("/detail/:id", ProductController.detailProduct);
productRouter.get("/search", ProductController.searchProduct);
productRouter.post("/create", ProductController.createProduct);
productRouter.put("/edit/:id", ProductController.editProduct);
productRouter.delete("/delete/:id", ProductController.deleteProduct);

module.exports = productRouter;
