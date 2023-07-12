const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 8);
};

const comparePassword = (password, hashpassword) => {
  return bcrypt.compareSync(password, hashpassword);
};

module.exports = { hashPassword, comparePassword };
