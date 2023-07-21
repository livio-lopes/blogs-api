const jwt = require('jsonwebtoken');

const config = {
  algorithm: 'HS256',
};

const cipher = process.env.JWT_SECRET;

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const createToken = (info) => jwt.sign(info, cipher, config);

const verifyToken = (token) => {
  if (extractToken(token)) {
    const bearerToken = extractToken(token);
    return jwt.verify(bearerToken, cipher);
  }
  return jwt.verify(token, cipher);
};

module.exports = {
  createToken,
  extractToken,
  verifyToken,
};