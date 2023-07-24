const express = require('express');
const postMiddleware = require('../middlwares/post.middleware');
const authMiddleware = require('../middlwares/auth.middleware');
const { createPost, getAllPostInfoComplete } = require('../controller/post.controller');

const postRoute = express.Router();

postRoute.get('/', authMiddleware, getAllPostInfoComplete);
postRoute.post('/', authMiddleware, postMiddleware, createPost);

module.exports = postRoute;