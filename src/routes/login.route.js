const express = require('express');
const loginMiddleware = require('../middlwares/login.middleware');
const { authLogin } = require('../controller/user.controller');

const loginRoute = express.Router();

loginRoute.post('/', loginMiddleware, authLogin);

module.exports = loginRoute;