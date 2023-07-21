const express = require('express');
const postMiddleware = require('../middlwares/post.middleware');
const authMiddleware = require('../middlwares/auth.middleware');

const postRoute = express.Router();

postRoute.post('/', authMiddleware, postMiddleware);

module.exports = postRoute;