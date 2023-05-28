const jwt = require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  };
  
  const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user.id);

  
    // Remove password from output
    user.password = undefined;
    user.withdraw_pass = undefined;
  
    res.status(statusCode).json({
      status: 'success',
      token,
      user
    });
};

module.exports = createSendToken;