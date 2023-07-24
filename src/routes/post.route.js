const express = require('express');
const postMiddleware = require('../middlwares/post.middleware');
const authMiddleware = require('../middlwares/auth.middleware');
const { createPost, 
    getAllPostInfoComplete, 
    getInfoPostCompleteById } = require('../controller/post.controller');

const postRoute = express.Router();

postRoute.get('/', authMiddleware, getAllPostInfoComplete);
postRoute.get('/:id', authMiddleware, getInfoPostCompleteById);
postRoute.post('/', authMiddleware, postMiddleware, createPost);

module.exports = postRoute;