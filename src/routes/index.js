const express = require('express');
const loginRoute = require('./login.route');
const userRoute = require('./user.route');
const categoryRoute = require('./category.route');
const authMiddleware = require('../middlwares/auth.middleware');

const routes = express.Router();
routes.use('/login', loginRoute);
routes.use('/user', userRoute);
routes.user('/categories', categoryRoute, authMiddleware);

module.exports = routes;