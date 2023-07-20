const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user ? user.dataValues : undefined;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users.dataValues;
};

const addUser = async (infosUser) => {
  const newUser = await User.create(infosUser);
  return newUser.dataValues;
};

module.exports = {
  getByEmail,
  addUser,
  getAllUsers,
};