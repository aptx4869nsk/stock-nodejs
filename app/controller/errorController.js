const appError = require("./../utils/appError");

const handleJWTError = () =>
  new appError("Invalid token. Please log in again!", 401);

const handleJWTExpiredError = () =>
  new appError("Your token has expired! Please log in again.", 401);

const sendErrorDev = async (err, req, res) => {
  try {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } catch {
    res.status(500).json({
      status: "error",
      message: "Internal Server",
    });
  }
};

const sendErrorProd = async (err, req, res) => {
  try {
    if (err.isOperational) {
      if (err.duplicate_key) {
        return res.status(err.statusCode).json({
          status: err.status,
          duplicate_key: err.duplicate_key,
          message: err.message,
        });
      }
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      return res.status(500).json({
        status: "error",
        message: `Something went wrong!`,
      });
    }
  } catch {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

globalErrorHandler = function (err, req, res, next) {
  try {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV === "development") {
      sendErrorDev(err, req, res);
    } else if (process.env.NODE_ENV === "production") {
      let error = { ...err };
      if (error.name === "JsonWebTokenError") error = handleJWTError();
      if (error.name === "TokenExpiredError") error = handleJWTExpiredError();
      sendErrorProd(err, req, res);
    }
  } catch {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = globalErrorHandler;
