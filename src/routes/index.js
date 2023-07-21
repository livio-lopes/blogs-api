const express = require('express');
const loginRoute = require('./login.route');
const userRoute = require('./user.route');
const categoryRoute = require('./category.route');
const postRoute = require('./post.route');

const routes = express.Router();
routes.use('/login', loginRoute);
routes.use('/user', userRoute);
routes.use('/categories', categoryRoute);
routes.use('/post', postRoute);

module.exports = routes;