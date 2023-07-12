const express = require("express");
const router = express.Router();
const user = require("./user");
const authentication = require("../middleware/authen");

router.use("/users", user);
router.use(authentication);

module.exports = router;
