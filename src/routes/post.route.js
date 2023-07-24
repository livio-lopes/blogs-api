const express = require('express');
const postMiddleware = require('../middlwares/post.middleware');
const authMiddleware = require('../middlwares/auth.middleware');
const { createPost } = require('../controller/post.controller');

const postRoute = express.Router();

postRoute.post('/', authMiddleware, postMiddleware, createPost);

module.exports = postRoute;