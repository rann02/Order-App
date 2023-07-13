const { User } = require("../models/index");
const { comparePassword } = require("../helpers/hashPassword");
const { createToken } = require("../helpers/jwt");

class Controller {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw { name: "UsernameorPasswordRequired" };
      }
      const user = await User.findOne({ where: { username } });
      if (!user) {
        throw { name: "InvalidCredential" };
      }
      const valid = comparePassword(password, user.password);
      if (!valid) {
        throw { name: "InvalidCredential" };
      }
      const payload = {
        id: user.id,
      };
      const access_token = createToken(payload);
      res.status(200).json({
        token: access_token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
