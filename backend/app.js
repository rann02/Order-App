require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const { User } = require("./models/index");

app.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

app.listen(port, () => {
  console.log(`Hello, app listening on port ${port}`);
});
