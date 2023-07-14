require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;
const reoter = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
const { Product } = require("./models/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(reoter);
app.use(errorHandler);

app.listen(port, () => {
  Product.sequelize
    .query(`SELECT 1+1`)
    .then(() => {
      console.log(`Hello, app listening on port ${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
});
