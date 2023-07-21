const { statusBadRequest, missingField, categoryIdNotFound } = require('../utils/statusUtils');
const categoryService = require('../service/category.service');

const postMiddleware = async (req, res, next) => {
  const { title, content, categoryId } = req.body;
  if (!title || !content || !categoryId) {
    return res.status(statusBadRequest).json(missingField);
  }
  const allCategories = await categoryService.getAllCategories();
  const listIdsCategories = allCategories.map(({ id }) => id);
  if (JSON.stringify(categoryId) !== JSON.stringify(listIdsCategories)) {
    return res.status(statusBadRequest).json(categoryIdNotFound);
  }
  return next();
};

module.exports = postMiddleware;