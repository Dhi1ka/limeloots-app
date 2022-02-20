const userRouter = require("express").Router();
const { UserController } = require("../controllers");

// CRUD USER
userRouter.get("/", UserController.getAllUsers);
userRouter.get("/detail/:id", UserController.detailUser);
userRouter.get("/search", UserController.searchUser);
userRouter.post("/create", UserController.createUser);
userRouter.put("/edit/:id", UserController.editUser);
userRouter.delete("/delete/:id", UserController.deleteUser);

// AUTH USER
userRouter.post("/auth/register", UserController.register);
userRouter.post("/auth/login", UserController.login);

module.exports = userRouter;
