const postService = require('../service/post.service');
const { statusCreated } = require('../utils/statusUtils');

const createPost = async (req, res) => {
 const { title, content, categoryIds } = req.body;
 const newPost = { title, content, categoryIds, userId: req.user };
 console.log(newPost);
 const createdPost = await postService.createPost(newPost);
 return res.status(statusCreated).json(createdPost);
};

module.exports = {
  createPost,
};