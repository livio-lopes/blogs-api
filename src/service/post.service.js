const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_EVN || 'development';
const sequelize = new Sequelize(config[env]);

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
  const allPost = await BlogPost.findAll();
  return allPost;
};

module.exports = { createPost, getAllPost };