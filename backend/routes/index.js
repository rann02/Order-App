const express = require("express");
const router = express.Router();
const user = require("./user");
const authentication = require("../middleware/authen");
const order = require("./order");
const product = require("./product");

router.use("/users", user);
router.use(authentication);
router.use("/", order);
router.use("/", product);

module.exports = router;
