const express = require('express');
const postMiddleware = require('../middlwares/post.middleware');
const authMiddleware = require('../middlwares/auth.middleware');
const { createPost, 
    getAllPostInfoComplete, 
    getInfoPostCompleteById, 
    updateInfoPost } = require('../controller/post.controller');
const updatePostMiddleware = require('../middlwares/updatePost.middleware');

const postRoute = express.Router();

postRoute.get('/:id', authMiddleware, getInfoPostCompleteById);
postRoute.get('/', authMiddleware, getAllPostInfoComplete);
postRoute.put('/:id', authMiddleware, updatePostMiddleware, updateInfoPost);
postRoute.post('/', authMiddleware, postMiddleware, createPost);

module.exports = postRoute;