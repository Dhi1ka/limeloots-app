const { user, order } = require("../models");

class OrderController {
  static async getAllOrders(req, res) {
    try {
      const orders = await order.findAll({
        order: [["id", "ASC"]],
        include: [user],
      });

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailOrder(req, res) {
    try {
      const id = +req.params.id;

      let result = await order.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Order with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchOrder(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createOrder(req, res) {
    try {
      const {
        createdOn,
        subtotal,
        discount,
        tax,
        totalDue,
        totalQty,
        payTrxNumber,
        city,
        address,
        status,
        userId,
      } = req.body;

      const result = await order.create({
        createdOn,
        subtotal,
        discount,
        tax,
        totalDue,
        totalQty,
        payTrxNumber,
        city,
        address,
        status,
        userId,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editOrder(req, res) {
    try {
      const id = +req.params.id;
      const {
        createdOn,
        subtotal,
        discount,
        tax,
        totalDue,
        totalQty,
        payTrxNumber,
        city,
        address,
        status,
        userId,
      } = req.body;

      let result = await order.update(
        {
          createdOn,
          subtotal,
          discount,
          tax,
          totalDue,
          totalQty,
          payTrxNumber,
          city,
          address,
          status,
          userId,
        },
        {
          where: {
            id,
          },
        },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Order with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Order with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteOrder(req, res) {
    try {
      const id = +req.params.id;

      let result = await order.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Order with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Order with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = OrderController;
