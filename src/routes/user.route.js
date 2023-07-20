const express = require('express');
const userMiddleware = require('../middlwares/user.middleware');
const { addUser, getAllUsers } = require('../controller/user.controller');
const authMiddleware = require('../middlwares/auth.middleware');

const userRoute = express.Router();

userRoute.post('/', userMiddleware, addUser);
userRoute.get('/', authMiddleware, getAllUsers);

module.exports = userRoute;