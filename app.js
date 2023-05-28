const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const appError = require("./app/utils/appError");
const globalErrorHandler = require("./app/controller/errorController");
const adminRoute = require("./app/route/adminRoute");
const bodyParser = require("body-parser");

// Start express app
const app = express();

//1) Global Middleware
// Implement Cors
app.use(cors());
app.options("*", cors());

// Set security HTTP headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 30,
  windowMs: 60 * 1000,
  message: "Too many requests from this IP, please try again in an few moment!",
});
app.use(limiter);

// Body parser, reading data from body into req.body
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// Data sanitization against XSS
app.use(xss());

// 2) Routes
app.use("/admin", adminRoute);

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});
// 3) Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
