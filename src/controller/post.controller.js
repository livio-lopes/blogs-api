const postService = require('../service/post.service');
const { statusCreated } = require('../utils/statusUtils');

const createPost = async (req, res) => {
 const { title, content } = req.body;
 const userId = req.user;
 const newPost = { title, content, userId };
 const createdPost = await postService.createPost(newPost);
 return res.status(statusCreated).json(createdPost);
};

module.exports = {
  createPost,
};