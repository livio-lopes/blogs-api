const express = require('express');
const authMiddleware = require('../middlwares/auth.middleware');
const categoryMiddleware = require('../middlwares/category.middleware');
const { addCategory, getAllCategories } = require('../controller/category.controller');

const categoryRoute = express.Router();

categoryRoute.get('/', authMiddleware, getAllCategories);
categoryRoute.post('/', authMiddleware, categoryMiddleware, addCategory);

module.exports = categoryRoute;