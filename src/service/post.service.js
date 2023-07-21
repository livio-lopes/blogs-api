const { BlogPost } = require('../models');

const createPost = async (infoPost) => {
  const { title, content, userId } = infoPost;
  const newPost = {
    title, 
    content,
    userId,
    published: Date.now(),
    updated: Date.now(),
   };
  const createdPost = await BlogPost.create(newPost);
  return createdPost;
};

module.exports = { createPost };