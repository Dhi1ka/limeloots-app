const router = require("express").Router();
const userRouter = require("./user");
const productRouter = require("./product");
const shoppingCartRouter = require("./shoppingCart");
const orderRouter = require("./order");
const productImageRouter = require("./productImage");
const lineItemRouter = require("./lineItem");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Limeloots",
  });
});

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/shopping-carts", shoppingCartRouter);
router.use("/orders", orderRouter);
router.use("/product-images", productImageRouter);
router.use("/line-items", lineItemRouter);

module.exports = router;
