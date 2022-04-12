const productImageRouter = require("express").Router();
const { ProductImageController } = require("../controllers");
const { authentication } = require("../middleware/auth");

// CRUD productImage
productImageRouter.get("/", ProductImageController.getAllProductImages);
productImageRouter.get(
  "/detail/:id",
  ProductImageController.detailProductImage,
);
productImageRouter.get("/search", ProductImageController.searchProductImage);
productImageRouter.post(
  "/create",
  authentication,
  ProductImageController.createProductImage,
);
productImageRouter.put(
  "/edit/:id",
  authentication,
  ProductImageController.editProductImage,
);
productImageRouter.delete(
  "/delete/:id",
  authentication,
  ProductImageController.deleteProductImage,
);

module.exports = productImageRouter;
