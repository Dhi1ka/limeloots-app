const { user } = require("../models");
const { decryptPass } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jwt");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await user.findAll({});

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailUser(req, res) {
    try {
      const id = +req.params.id;

      let result = await user.findByPk(id);

      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json({
          message: `User with ID ${id} not found!`,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async searchUser(req, res) {
    try {
      //
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async createUser(req, res) {
    try {
      const { name, email, password, salt, birthDate, gender, avatar, type } =
        req.body;

      const result = await user.create({
        name,
        email,
        password,
        salt,
        birthDate,
        gender,
        avatar,
        type,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async editUser(req, res) {
    try {
      const id = +req.params.id;
      const { name, email, password, salt, birthDate, gender, avatar, type } =
        req.body;

      let result = await user.update(
        {
          name,
          email,
          password,
          salt,
          birthDate,
          gender,
          avatar,
          type,
        },
        {
          where: {
            id,
          },
        },
      );

      result[0] === 1
        ? res.status(201).json({
            message: `User with ID ${id} updated successfully!`,
          })
        : res.status(404).json({
            message: `User with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = +req.params.id;

      let result = await user.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `User with ID ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `User with ID ${id} not found!`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { name, email, password, salt, birthDate, gender, avatar, type } =
        req.body;

      let result = await user.create({
        name,
        email,
        password,
        salt,
        birthDate,
        gender,
        avatar,
        type,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      let resultLogin = await user.findOne({
        where: {
          email,
        },
      });

      if (resultLogin) {
        if ((decryptPass, resultLogin.password)) {
          let token = tokenGenerator(resultLogin);

          res.status(200).json({
            access_token: token,
          });
        } else {
          res.status(400).json({
            message: "Your password is not correct!",
          });
        }
      } else {
        res.status(404).json({
          message: "user not found!",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
