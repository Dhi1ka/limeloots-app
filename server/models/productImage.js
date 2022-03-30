"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productImage.belongsTo(models.product);
    }
  }
  productImage.init(
    {
      fileName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "File Name required!",
          },
        },
      },
      fileSize: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "File Size required!",
          },
          isNumeric: {
            message: "File Size must be numeric!",
          },
        },
      },
      fileType: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "File Type required!",
          },
        },
        values: [".jpg", ".png"],
      },
      primary: DataTypes.BOOLEAN,
      productId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Product ID required!",
          },
          isNumeric: {
            message: "Product ID must be numeric!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "productImage",
    },
  );
  return productImage;
};
