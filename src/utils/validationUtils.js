const userService = require('../service/user.service');
const categoryService = require('../service/category.service');

const invalidDisplayName = (name) => name.length <= 8;

const invalidEmail = (email) => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return !regex.test(email);
};

const invalidPassword = (password) => password.length < 6;

const existingEmail = async (email) => {
  const user = await userService.getByEmail(email);
  return user ? user.email : false;
};

const invalidIdsCategories = async (categoryIds) => {
  if (!categoryIds) return true;
  const allCategories = await categoryService.getAllCategories();
  const listIdsCategories = allCategories.map(({ id }) => id);
  return !categoryIds.every((id) => listIdsCategories.includes(id));
};

module.exports = {
  invalidDisplayName,
  invalidEmail,
  invalidPassword,
  existingEmail,
  invalidIdsCategories,
};