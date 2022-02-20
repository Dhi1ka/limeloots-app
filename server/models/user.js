"use strict";
const { Model } = require("sequelize");

const { encryptPass } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.product);
      user.hasMany(models.shoppingCart);
      user.hasMany(models.order);
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name required!",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: {
            message: "Email required!",
          },
          isEmail: {
            message: "Email not valid!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Password required!",
          },
          len: [8, 255],
        },
      },
      salt: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      gender: DataTypes.STRING,
      avatar: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptPass(user.password);
        },
      },
      sequelize,
      modelName: "user",
    },
  );
  return user;
};
