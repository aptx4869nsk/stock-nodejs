const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Validator = require("./../../utils/Validator");
const appError = require("./../../utils/appError");
const db = require("../../helpers/mysqlHelper");
const catchAsync = require("./../../utils/catchAsync");
const sendToken = require("./../../utils/createSendToken");
const bcrypt = require("bcrypt");
const Admin = require("./../../model/admin/admin");

module.exports.login = catchAsync(async (req, res, next) => {
  const rules = {
    name: "required|usernameRegex",
  };
  var valid = true;
  const callback = async (err, status) => {
    if (!status) {
      valid = false;
      if (err.errors.name) {
        return next(new appError(err.errors.name[0], 400));
      }
    }
  };
  await Validator(req.body, rules, {}, callback);
  if (!valid) return;
  const admin = await Admin.findOne({ where: { name: req.body.name } });

  if (!admin) {
    return next(new appError(`Invalid username or password`, 401));
  }
  if (!(await bcrypt.compare(req.body.password, admin.password))) {
    return next(new appError("Invalid username or password", 401));
  }
  return sendToken(admin, 200, req, res);
});

module.exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new appError("You are not logged in! Please log in to get access.", 401)
    );
  }

  // Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exists
  const currentUser = await db.query(
    `select name,pass_change_at from users where id = $1`,
    [decoded.id]
  );
  if (currentUser.rowCount == 0) {
    return next(
      new appError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  // Check if user changed password after the token was issued
  const timestamp = parseInt(
    currentUser.rows[0].pass_change_at.getTime() / 1000,
    10
  );
  if (decoded.iat < timestamp) {
    return next(
      new appError("User recently changed password! Please log in again.", 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.username = currentUser.rows[0].name;
  next();
});
