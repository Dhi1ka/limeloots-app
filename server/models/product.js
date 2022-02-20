"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.user);
      product.hasMany(models.productImage);
      product.hasMany(models.lineItem);
    }
  }
  product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Product name required!",
          },
        },
      },
      desc: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Description product required!",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Price required!",
          },
          isNumeric: {
            message: "Price must be numeric!",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Stock required!",
          },
          isNumeric: {
            message: "Stock must be numeric!",
          },
        },
      },
      expire: DataTypes.DATE,
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Weight required!",
          },
          isNumeric: {
            message: "Weight must be numeric!",
          },
        },
      },
      category: DataTypes.STRING,
      brand: DataTypes.STRING,
      condition: DataTypes.STRING,
      totalSold: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      views: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "User ID required!",
          },
          isNumeric: {
            message: "User ID must be numeric!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "product",
    },
  );
  return product;
};
