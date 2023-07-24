const postService = require('../service/post.service');
const { statusCreated, statusOk,
  statusNotFound, postNoExist,
  statusUnauthorized, userUnauthorizad, statusNoContent } = require('../utils/statusUtils');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const newPost = { title, content, categoryIds, userId: req.user };
  const createdPost = await postService.createPost(newPost);
  return res.status(statusCreated).json(createdPost);
};

const getAllPostInfoComplete = async (req, res) => {
  const allPost = await postService.getAllPost();
  return res.status(statusOk).json(allPost);
};
const getInfoPostCompleteById = async (req, res) => {
  const { id } = req.params;
  const postById = await postService.getPostById(id);
  if (!postById) return res.status(statusNotFound).json(postNoExist);
  return res.status(statusOk).json(postById);
};

const updateInfoPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPost = await postService.updatePost({ id, title, content });
  return res.status(statusOk).json(updatedPost);
};

const deletePost = async (req, res) => {
  const userNow = req.user;
  const { id } = req.params;
  const post = await postService.getPostById(Number(id));
  if (!post) {
    return res.status(statusNotFound).json(postNoExist);
  }
  if (userNow !== post.userId) {
    return res.status(statusUnauthorized).json(userUnauthorizad);
  }
 await postService.deletePost(Number(id));

  return res.status(statusNoContent).end();
};

module.exports = {
  createPost,
  getAllPostInfoComplete,
  getInfoPostCompleteById,
  updateInfoPost,
  deletePost,
};