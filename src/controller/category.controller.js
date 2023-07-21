const categoryService = require('../service/category.service');
const { statusCreated, statusOk } = require('../utils/statusUtils');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const categoryRegistred = await categoryService.addCategory(name);
  return res.status(statusCreated).json(categoryRegistred);
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoryService.getAllCategories();
  return res.status(statusOk).json(allCategories);
};

module.exports = { addCategory, getAllCategories };