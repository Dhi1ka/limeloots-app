"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shoppingCart.belongsTo(models.user);
    }
  }
  shoppingCart.init(
    {
      createdOn: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: {
            message: "Create On date required!",
          },
          isDate: {
            message: "Date format required!",
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
      modelName: "shoppingCart",
    },
  );
  return shoppingCart;
};
