const { Product } = require("../models/index");

class Controller {
  static async getProduct(req, res, next) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
