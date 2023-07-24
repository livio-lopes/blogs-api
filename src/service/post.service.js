const Sequelize = require('sequelize');
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
  console.log('service', infoPost);
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

const getPostById = async (id) => {
  const postById = await BlogPost.findByPk(Number(id), includeConfig);
  return postById;
};
const updatePost = async ({ id, title, content }) => {
  const updatedPost = await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  return updatedPost;
};

module.exports = {
  createPost,
  getAllPost,
  getPostById,
  updatePost,
};