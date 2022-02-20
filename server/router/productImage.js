const productImageRouter = require("express").Router();
const { ProductImageController } = require("../controllers");

// CRUD productImage
productImageRouter.get("/", ProductImageController.getAllProductImages);
productImageRouter.get(
  "/detail/:id",
  ProductImageController.detailProductImage,
);
productImageRouter.get("/search", ProductImageController.searchProductImage);
productImageRouter.post("/create", ProductImageController.createProductImage);
productImageRouter.put("/edit/:id", ProductImageController.editProductImage);
productImageRouter.delete(
  "/delete/:id",
  ProductImageController.deleteProductImage,
);

module.exports = productImageRouter;
