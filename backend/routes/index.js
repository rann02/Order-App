const express = require("express");
const router = express.Router();
const user = require("./user");
const authentication = require("../middleware/authen");
const order = require("./order");

router.use("/users", user);
router.use(authentication);
router.use("/", order);

module.exports = router;
