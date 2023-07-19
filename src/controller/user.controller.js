const { statusOk, statusBadRequest, invalidFields } = require('../utils/statusUtils');
const { createToken } = require('../utils/authUtils');
const userService = require('../service/user.service');

const authLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getByEmail(email);
  if (!user || user.password !== password) {
    return res.status(statusBadRequest).json(invalidFields);
  }
  delete user.password;
  console.log(user);
  const token = createToken(user);
  return res.status(statusOk).json({ token });
};

module.exports = authLogin;