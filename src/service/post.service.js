const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');
const { getAllUsers } = require('./user.service');
const { getAllCategories } = require('./category.service');

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
  const allPosts = await BlogPost.findAll();
  return allPosts;
};

const getAllPostCategories = async () => {
  const allPostCategories = await PostCategory.findAll();
  return allPostCategories;
};

const postAddUserInfo = async (posts) => {
  const allUsers = await getAllUsers();
  const postWithUsers = posts.map((post) => {
    const user = allUsers.find(({ id }) => id === post.userId);
    return { ...post.dataValues, user };
  });
  return postWithUsers;
};

const postAddCategoriesInfo = async (posts) => {
  const allPostCategories = await getAllPostCategories();
  const allCategories = await getAllCategories();
  const postWithCategories = posts
  .map((post) => {
    const { categoryId } = allPostCategories.find(({ postId }) => postId === post.id);
    return { ...post, categories: allCategories.filter(({ id }) => id === categoryId) };
  });
  return postWithCategories;
};
const infoPostComplete = async () => {
  const allPosts = await getAllPost();
  const postWithUsers = await postAddUserInfo(allPosts);
  const postWithCategories = await postAddCategoriesInfo(postWithUsers);
  return postWithCategories;
};

module.exports = { createPost, infoPostComplete };