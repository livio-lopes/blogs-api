const categoryService = require('../service/category.service');
const { statusCreated } = require('../utils/statusUtils');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const categoryRegistred = await categoryService.addCategory(name);
  return res.status(statusCreated).json(categoryRegistred);
};

module.exports = { addCategory };