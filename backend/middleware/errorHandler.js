const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (
    err.name == "SequelizeValidationError" ||
    err.name == "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({
      message: err.errors[0].message,
    });
  } else if (err.name === "NotFound") {
    res.status(404).json({
      messsage: err.message,
    });
  } else if (err.name === "NoOrder") {
    res.status(404).json({
      message: err.message,
    });
  } else if (err.name == "UsernameorPasswordRequired") {
    res.status(400).json({
      message: "username or password required",
    });
  } else if (err.name == "InvalidCredential") {
    res.status(401).json({
      message: "username or password incorrrect",
    });
  } else if (err.name == "ProductIdEmpty") {
    res.status(401).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      messsage: "Internal Server Error",
    });
  }
};

module.exports = errorHandler;
