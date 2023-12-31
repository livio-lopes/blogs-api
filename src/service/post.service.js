const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_EVN || 'development';
const sequelize = new Sequelize(config[env]);

const includeConfig = {
  include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ],
};

const createPost = async (infoPost) => {
  const { title, content, userId, categoryIds } = infoPost;
  const resultTransaction = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, userId },
      { transaction: t },
    );
    const listPostCategories = categoryIds.map((id) => ({
      postId: newPost.id,
      categoryId: id,
    }));
    await PostCategory.bulkCreate(listPostCategories, { transaction: t });
    return newPost;
  });
  return resultTransaction;
};

const getAllPost = async () => {
  const allPosts = await BlogPost.findAll(includeConfig);
  return allPosts;
};

const getAllPostBySearch = async (q) => {
  if (!q) {
    const allPosts = await BlogPost.findAll(includeConfig);
    return allPosts;
  }
  const searchPosts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: includeConfig.include,
  });
  return searchPosts;
};

const getPostById = async (id) => {
  const postById = await BlogPost.findByPk(Number(id), includeConfig);
  return postById;
};
const updatePost = async ({ id, title, content }) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await getPostById(Number(id));
  return updatedPost;
};

const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPostBySearch,
};