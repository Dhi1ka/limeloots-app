const { shoppingCart } = require("../models");

class ShoppingCartController {
  static async getAllShoppingCarts(req, res) {
    try {
      const shoppingCarts = await shoppingCart.findAll({});

      res.status(200).json(shoppingCarts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailShoppingCart(req, res) {
    try {
      const id = +req.params.id;

      let result = await shoppingCart.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Shopping Cart with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchShoppingCart(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createShoppingCart(req, res) {
    try {
      const { createdOn, status } = req.body;

      const result = await shoppingCart.create({
        createdOn,
        status,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editShoppingCart(req, res) {
    try {
      const id = +req.params.id;
      const { createdOn, status } = req.body;

      let result = await shoppingCart.update(
        {
          createdOn,
          status,
        },
        {
          where: {
            id,
          },
        },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Shopping Cart with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Shopping Cart with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteShoppingCart(req, res) {
    try {
      const id = +req.params.id;

      let result = await shoppingCart.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Shopping Cart with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Shopping Cart with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ShoppingCartController;
