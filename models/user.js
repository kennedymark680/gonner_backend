'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      movieId: DataTypes.INTEGER,
      guessListId: DataTypes.INTEGER,
      admin: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
