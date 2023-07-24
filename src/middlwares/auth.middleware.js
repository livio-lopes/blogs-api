const { verifyToken } = require('../utils/authUtils');
const { statusUnauthorized, tokenNotFound, tokenInvalid } = require('../utils/statusUtils');

const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(statusUnauthorized).json(tokenNotFound);
    }

    const user = verifyToken(authorization);
    req.user = user.id;
    console.log(req.user);
    return next();
  } catch (error) {
    return res.status(statusUnauthorized).json(tokenInvalid);
  }
};

module.exports = authMiddleware;