const { Category } = require('../models');

const addCategory = async (name) => {
    const newCategory = await Category.create({ name });
    console.log(newCategory);
    return newCategory;
};

module.exports = { addCategory };