const { User } = require('../models');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user ? user.dataValues : undefined;
};

module.exports = {
  getByEmail,
};