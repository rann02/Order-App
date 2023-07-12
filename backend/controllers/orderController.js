const { Order } = require("../models/index");

class Controller {
  static async getOrders(req, res, next) {
    try {
      const UserId = req.id;
      const orders = await Order.findAll({ where: UserId });
      res.status(200).json(orders);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
