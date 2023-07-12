require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;
const reoter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(reoter);

app.listen(port, () => {
  console.log(`Hello, app listening on port ${port}`);
});
