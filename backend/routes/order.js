const express = require("express");
const router = express.Router();
const Cotroller = require("../controllers/orderController");

// define the home page route
router.get("/orders", Cotroller.getOrders);
router.post("/orders", Cotroller.createOrder);

module.exports = router;
