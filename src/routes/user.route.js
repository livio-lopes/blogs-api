const express = require('express');
const userMiddleware = require('../middlwares/user.middleware');
const { addUser, getAllUsers, getUserById, deleteUser } = require('../controller/user.controller');
const authMiddleware = require('../middlwares/auth.middleware');

const userRoute = express.Router();

userRoute.get('/', authMiddleware, getAllUsers);
userRoute.get('/:id', authMiddleware, getUserById);
userRoute.post('/', userMiddleware, addUser);
userRoute.delete('/me', authMiddleware, deleteUser);

module.exports = userRoute;