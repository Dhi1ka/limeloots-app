const { product, shoppingCart, lineItem } = require("../models");

class LineItemController {
  static async getAllLineItems(req, res) {
    try {
      const lineItems = await lineItem.findAll({
        order: [["id", "ASC"]],
        include: [product, shoppingCart],
      });

      res.status(200).json(lineItems);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailLineItem(req, res) {
    try {
      const id = +req.params.id;

      let result = await lineItem.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Line Item with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchLineItem(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createLineItem(req, res) {
    try {
      const { qty, status, productId, shoppingCartId, orderName } = req.body;

      const result = await lineItem.create({
        qty,
        status,
        productId,
        shoppingCartId,
        orderName,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editLineItem(req, res) {
    try {
      const id = +req.params.id;
      const { qty, status, productId, shoppingCartId, orderName } = req.body;

      let result = await lineItem.update(
        {
          qty,
          status,
          productId,
          shoppingCartId,
          orderName,
        },
        {
          where: {
            id,
          },
        },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Line Item with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Line Item with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteLineItem(req, res) {
    try {
      const id = +req.params.id;

      let result = await lineItem.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Line Item with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Line Item with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = LineItemController;
