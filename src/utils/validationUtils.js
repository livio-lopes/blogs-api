const userService = require('../service/user.service');

const invalidDisplayName = (name) => name.length <= 8;

const invalidEmail = (email) => {
  const regex = '[a-z0-9]+@[a-z]+.[a-z]{2,3}';
  return regex.test(email);
};

const invalidPassword = (password) => password.length <= 6;

const existingEmail = (email) => {
  const user = userService.getByEmail(email);
  return user ? user.email : undefined;
};

module.exports = {
  invalidDisplayName,
  invalidEmail,
  invalidPassword,
  existingEmail,
};