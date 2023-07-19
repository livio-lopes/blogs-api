const express = require('express');
const userMiddleware = require('../middlwares/user.middleware');
const { addUser } = require('../controller/user.controller');

const userRoute = express.Router();

userRoute.post('/', userMiddleware, addUser);

module.exports = userRoute;