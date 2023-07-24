const { Category } = require('../models');

const addCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category.dataValues;
};

module.exports = { addCategory, getAllCategories, getCategoryById };