"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user);
      order.hasMany(models.lineItem);
    }
  }
  order.init(
    {
      createdOn: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: {
            message: "Created On required!",
          },
          isDate: {
            message: "Date format required!",
          },
        },
      },
      subtotal: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Subtotal required!",
          },
          isNumeric: {
            message: "Subtotal must be numeric!",
          },
        },
      },
      discount: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: {
            message: "Discount must be numeric!",
          },
        },
        defaultValue: 5 / 100,
      },
      tax: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: {
            message: "Tax must be numeric!",
          },
        },
      },
      totalDue: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Total Due required!",
          },
          isNumeric: {
            message: "Total Due must be numeric!",
          },
        },
        // get: function () {
        //   if (totalQty > 2) {
        //     return totalQty * discount;
        //   }
        // },
      },
      totalQty: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Total Quantity required!",
          },
          isNumeric: {
            message: "Total Quantity must be numeric!",
          },
        },
      },
      payTrxNumber: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Payment Transaction required!",
          },
        },
      },
      city: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "City required!",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Address required!",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        values: ["Open", "Cancelled", "Paid", "Shipping", "Closed"],
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
      modelName: "order",
    },
  );
  return order;
};
