const { product, productImage } = require("../models");

class ProductImageController {
  static async getAllProductImages(req, res) {
    try {
      const productImages = await productImage.findAll({
        order: [["id", "ASC"]],
        include: [product],
      });

      res.status(200).json(productImages);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailProductImage(req, res) {
    try {
      const id = +req.params.id;

      let result = await productImage.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `Product Image with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchProductImage(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createProductImage(req, res) {
    try {
      const { fileName, fileSize, fileType, primary, productId } = req.body;

      const result = await productImage.create({
        fileName,
        fileSize,
        fileType,
        primary,
        productId,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editProductImage(req, res) {
    try {
      const id = +req.params.id;
      const { fileName, fileSize, fileType, primary, productId } = req.body;

      let result = await productImage.update(
        {
          fileName,
          fileSize,
          fileType,
          primary,
          productId,
        },
        {
          where: {
            id,
          },
        },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `Product Image with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `Product Image with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteProductImage(req, res) {
    try {
      const id = +req.params.id;

      let result = await productImage.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `Product Image with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `Product Image with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ProductImageController;
