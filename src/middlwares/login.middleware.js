const { badRequest, invalidFields, missingField } = require('../utils/statusUtils');

const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(badRequest).json(invalidFields);
  }
  if (!email || !password) {
    return res.status(badRequest).json(missingField);
  }
  return next();
};

module.exports = loginMiddleware;