const express = require("express");
const router = express.Router();
const Cotroller = require("../controllers/userController");

// define the home page route
router.post("/login", Cotroller.login);

module.exports = router;
