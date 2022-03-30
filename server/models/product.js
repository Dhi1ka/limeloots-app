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
          isInt: {
            message: "Price must be integer!",
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Stock required!",
          },
          isInt: {
            message: "Stock must be integer!",
          },
        },
      },
      expire: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: {
            message: "Expire date required!",
          },
          isDate: {
            message: "Date format required!",
          },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Weight required!",
          },
          isInt: {
            message: "Weight must be integer!",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        values: ["Jam", "Cream", "Other"],
      },
      brand: {
        type: DataTypes.STRING,
        values: ["Marawa", "Simply Kaya", "Other"],
      },
      condition: {
        type: DataTypes.STRING,
        values: ["New", "Good", "Fresh"],
      },
      totalSold: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Total Sold required!",
          },
          isInt: {
            message: "Total Sold must be integer!",
          },
        },
      },
      rating: {
        type: DataTypes.DECIMAL,
        validate: {
          isDecimal: {
            message: "Rating must be decimal!",
          },
        },
      },
      views: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Views required!",
          },
          isInt: {
            message: "Views must be integer!",
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
      modelName: "product",
    },
  );
  return product;
};
