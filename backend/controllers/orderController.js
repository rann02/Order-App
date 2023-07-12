const { Order, Product } = require("../models/index");

class Controller {
  static async createOrder(req, res, next) {
    try {
      console.log(req.body);
      const { productId, price, quantity } = req.body;
      const UserId = req.user.id;
      const product = await Product.findOne({ where: { id: productId } });
      if (!product) {
        throw { name: "NotFound" };
      }
      const newOrder = await Order.create({
        name: product.name,
        price,
        quantity,
        imgUrl: product.imgUrl,
        UserId,
      });
      res.status(201).json({ message: "Order created", data: newOrder });
    } catch (error) {
      console.log(error);
    }
  }

  static async getOrders(req, res, next) {
    try {
      const UserId = req.user.id;
      console.log(UserId);

      const orders = await Order.findAll({ where: { UserId } });
      if (orders.length === 0) {
        throw { name: "NoOrder" };
      }
      res.status(200).json(orders);
    } catch (error) {
      if (error.name === "NoOrder") {
        res.status(404).json({ message: "No Order Created" });
      }
      console.log(error);
    }
  }
}

module.exports = Controller;
