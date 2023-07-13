const express = require("express");
const router = express.Router();
const Cotroller = require("../controllers/userController");

router.post("/login", Cotroller.login);

module.exports = router;
