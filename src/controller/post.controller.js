const postService = require('../service/post.service');
const { statusCreated, statusOk } = require('../utils/statusUtils');

const createPost = async (req, res) => {
 const { title, content, categoryIds } = req.body;
 const newPost = { title, content, categoryIds, userId: req.user };
 const createdPost = await postService.createPost(newPost);
 return res.status(statusCreated).json(createdPost);
};

const getAllPostInfoComplete = async (req, res) => {
  const allPost = await postService.infoPostComplete();
  return res.status(statusOk).json(allPost);
};

module.exports = {
  createPost,
  getAllPostInfoComplete,
};