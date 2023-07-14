const express = require("express");
const router = express.Router();
const Cotroller = require("../controllers/orderController");

router.get("/orders", Cotroller.getOrders);
router.post("/order", Cotroller.createOrder);

module.exports = router;
