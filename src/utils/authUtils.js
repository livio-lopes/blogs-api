const jwt = require('jsonwebtoken');

const config = {
  algorithm: 'HS256',
};

const cipher = process.env.JWT_SECRET;

const createToken = (info) => jwt.sign(info, cipher, config);
const verifyToken = (token) => {
  try {
    const checkedToken = jwt.verify(token, cipher);
    return checkedToken;
  } catch (error) {
    return undefined;
  }
};

module.exports = {
  createToken,
  verifyToken,
};