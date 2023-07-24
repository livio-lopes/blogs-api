const { statusBadRequest,
    missingField,
    statusUnauthorized,
    userUnauthorizad } = require('../utils/statusUtils');
const postService = require('../service/post.service');

const updatePostMiddleware = async (req, res, next) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const userNow = req.user;
    if (!title || !content) {
        return res.status(statusBadRequest).json(missingField);
    }
    const post = await postService.getPostById(Number(id));
    if (post.id !== userNow) {
        return res.status(statusUnauthorized).json(userUnauthorizad);
    }

    return next();
};

module.exports = updatePostMiddleware;