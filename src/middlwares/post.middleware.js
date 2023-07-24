const { statusBadRequest, missingField, categoryIdNotFound } = require('../utils/statusUtils');
const { invalidIdsCategories } = require('../utils/validationUtils');

const postMiddleware = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content) {
    return res.status(statusBadRequest).json(missingField);
  }
  const checkedIds = await invalidIdsCategories(categoryIds);
  if (checkedIds) {
    return res.status(statusBadRequest).json(categoryIdNotFound);
  }
  return next();
};

module.exports = postMiddleware;