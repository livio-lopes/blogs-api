const express = require('express');
const authMiddleware = require('../middlwares/auth.middleware');
const categoryMiddleware = require('../middlwares/category.middleware');

const categoryRoute = express.Router();

categoryRoute.post('/', authMiddleware, categoryMiddleware);

module.exports = categoryRoute;