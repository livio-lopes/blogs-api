module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',{
    id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'blog_posts'
  })
  return BlogPost;
}