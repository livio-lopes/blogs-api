const express = require('express');
const postMiddleware = require('../middlwares/post.middleware');
const authMiddleware = require('../middlwares/auth.middleware');
const { createPost, 
    getAllPostInfoComplete, 
    getInfoPostCompleteById, 
    updateInfoPost, 
    deletePost, 
    queryAllPosts } = require('../controller/post.controller');
const updatePostMiddleware = require('../middlwares/updatePost.middleware');

const postRoute = express.Router();

postRoute.get('/search', authMiddleware, queryAllPosts);
postRoute.get('/', authMiddleware, getAllPostInfoComplete);
postRoute.get('/:id', authMiddleware, getInfoPostCompleteById);
postRoute.put('/:id', authMiddleware, updatePostMiddleware, updateInfoPost);
postRoute.post('/', authMiddleware, postMiddleware, createPost);
postRoute.delete('/:id', authMiddleware, deletePost);

module.exports = postRoute;