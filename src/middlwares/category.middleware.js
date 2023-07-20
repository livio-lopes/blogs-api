const { statusBadRequest, nameRequired } = require('../utils/statusUtils');

const categoryMiddleware = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(statusBadRequest).json(nameRequired);
  }
  return next();
};

module.exports = categoryMiddleware;