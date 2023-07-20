const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user ? user.dataValues : undefined;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

const addUser = async (infosUser) => {
  const newUser = await User.create(infosUser);
  return newUser.dataValues;
};

module.exports = {
  getByEmail,
  addUser,
  getAllUsers,
  getUserById,
};