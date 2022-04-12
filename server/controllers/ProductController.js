const { user, productImage, product } = require("../models");

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await product.findAll({
        order: [["id", "ASC"]],
        include: [user, productImage],
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailProduct(req, res) {
    try {
      const id = +req.params.id;

      let result = await product.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Product with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchProduct(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createProduct(req, res) {
    try {
      const {
        name,
        desc,
        price,
        stock,
        expire,
        weight,
        category,
        brand,
        condition,
        totalSold,
        rating,
        views,
        userId,
      } = req.body;

      const result = await product.create({
        name,
        desc,
        price,
        stock,
        expire,
        weight,
        category,
        brand,
        condition,
        totalSold,
        rating,
        views,
        userId,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editProduct(req, res) {
    try {
      const id = +req.params.id;
      const {
        name,
        desc,
        price,
        stock,
        expire,
        weight,
        category,
        brand,
        condition,
        totalSold,
        rating,
        views,
        userId,
      } = req.body;

      let result = await product.update(
        {
          name,
          desc,
          price,
          stock,
          expire,
          weight,
          category,
          brand,
          condition,
          totalSold,
          rating,
          views,
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
            message: `Product with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Product with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const id = +req.params.id;

      let result = await product.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Product with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Product with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ProductController;
