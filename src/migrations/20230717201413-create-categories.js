'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories',{
      id:{type: Sequelize.INTEGER, autoIncrement:true, allowNull: false, primaryKey: true},
      name:{ type: Sequelize.STRING, allowNull: false},
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
