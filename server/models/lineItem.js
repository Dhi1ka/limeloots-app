"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lineItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      lineItem.belongsTo(models.product);
      lineItem.belongsTo(models.order);
    }
  }
  lineItem.init(
    {
      qty: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Quantity required!",
          },
          isNumeric: {
            message: "Quantity must be numeric!",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Status required!",
          },
        },
      },
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
      shoppingCartId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Shopping Cart ID required!",
          },
          isNumeric: {
            message: "Shopping Cart ID must be numeric!",
          },
        },
      },
      orderId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Order ID required!",
          },
          isNumeric: {
            message: "Order ID must be numeric!",
          },
        },
      },
      orderName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Order Name required!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "lineItem",
    },
  );
  return lineItem;
};
