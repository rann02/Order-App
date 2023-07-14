const { Order, Product } = require("../models/index");

class Controller {
  static async createOrder(req, res, next) {
    try {
      const { productId, price, quantity } = req.body;
      const UserId = req.user.id;
      if (!productId) {
        throw {
          name: "ProductIdEmpty",
          message: "Name of product required",
        };
      }
      const product = await Product.findOne({ where: { id: productId } });
      if (!product) {
        throw { name: "NotFound", message: "Product not found" };
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
      next(error);
    }
  }

  static async getOrders(req, res, next) {
    try {
      const UserId = req.user.id;
      const orders = await Order.findAll({ where: { UserId } });
      if (orders.length === 0) {
        throw { name: "NoOrder", message: "No order yet!" };
      }
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
