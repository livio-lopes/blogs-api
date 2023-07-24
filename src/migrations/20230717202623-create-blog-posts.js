'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts',{
      id:{ type: Sequelize.INTEGER, allowNull: false, primaryKey: true, 
        autoIncrement: true},
      title: {type: Sequelize.STRING},
      content: {type: Sequelize.STRING},
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      published: {type: Sequelize.DATE},
      updated: {type: Sequelize.DATE},
    },{
      underscored: true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts')
  }
};
