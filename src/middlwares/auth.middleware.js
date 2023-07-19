const { verifyToken } = require('../utils/authUtils');
const { statusUnauthorized, tokenNotFound, tokenInvalid } = require('../utils/statusUtils');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(statusUnauthorized).json(tokenNotFound);
  }
  if (!verifyToken(authorization)) {
    return res.status(statusUnauthorized).json(tokenInvalid);
  }
  return next();
};

module.exports = authMiddleware;