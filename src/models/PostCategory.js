module.exports = (sequelize, DataTypes) =>{
  const PostCategory = sequelize.define('PostCategory',{
    postId: {type: DataTypes.INTEGER, foreignKey: true},
    categoryId: {type: DataTypes.INTEGER, foreignKey: true},
  },{
    underscored: true,
    timestamps: false,
    tableName: 'users'
  })

  return PostCategory;
}