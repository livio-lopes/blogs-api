const { statusOk,
  statusBadRequest, 
  invalidFields,
  statusCreated, 
  statusNotFound,
  userNoExist } = require('../utils/statusUtils');
const { createToken } = require('../utils/authUtils');
const userService = require('../service/user.service');

const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getByEmail(email);
  if (!user || user.password !== password) {
    return res.status(statusBadRequest).json(invalidFields);
  }
  delete user.password;
  const token = createToken(user);
  return res.status(statusOk).json({ token });
};

const addUser = async (req, res) => {
  const newUser = req.body;
  await userService.addUser(req.body);
  delete newUser.password;
  const token = createToken(newUser);
  return res.status(statusCreated).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(statusOk).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(Number(id));
  if (!user) return res.status(statusNotFound).json(userNoExist);
  return res.status(statusOk).json(user);
};

module.exports = { 
  authLogin, 
  addUser, 
  getAllUsers,
  getUserById,
};