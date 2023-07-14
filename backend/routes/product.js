const express = require("express");
const router = express.Router();
const Cotroller = require("../controllers/productController");

router.get("/products", Cotroller.getProduct);

module.exports = router;
