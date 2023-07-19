const { statusBadRequest, missingField } = require('../utils/statusUtils');

const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(statusBadRequest).json(missingField);
  }
  return next();
};

module.exports = loginMiddleware;