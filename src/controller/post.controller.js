const postService = require('../service/post.service');
const { statusCreated, statusOk, statusNotFound, postNoExist } = require('../utils/statusUtils');

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
const getInfoPostCompleteById = async (req, res) => {
  const { id } = req.params;
  const allPost = await postService.infoPostComplete();
  const postById = allPost.find((post) => Number(id) === post.id);
  if (!postById) return res.status(statusNotFound).json(postNoExist);
  return res.status(statusOk).json(postById);
};

module.exports = {
  createPost,
  getAllPostInfoComplete,
  getInfoPostCompleteById,
};