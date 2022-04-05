const { user, product } = require("../models");

const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  console.log(`Auth Middleware is Work!`);

  const { access_token } = req.headers;

  if (access_token) {
    try {
      let verify = tokenVerifier(access_token);
      req.userData = verify;
    } catch (error) {
      res.status(401).json({
        error,
        message: "User not authenticated!",
      });
    }
  } else {
    res.status(404).json({
      message: "Token not found!",
    });
  }

  next();
};

const authorization = (req, res, next) => {
  console.log("Authorization Middleware is Work!");

  const { access_token } = req.headers;

  if (!access_token) {
    res.status(403).json({
      message: "Forbidden!",
    });
  } else {
    const id = +req.params.id;

    product
      .findByPk(id)
      .then((userId) => {
        if (userId !== req.userData.id) {
          res.status(401).json({
            message: "Unauthorized!",
          });
        } else {
          next();
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
};

module.exports = { authentication, authorization };
