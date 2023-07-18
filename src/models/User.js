module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    displayName: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },{
    underscored: true,
    timestamps: false,
    tableName: 'users'
  })
  return User;
}