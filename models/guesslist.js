'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GuessList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GuessList.init(
    {
      name: DataTypes.STRING,
      score: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'GuessList',
      tableName: 'guesslists'
    }
  )
  return GuessList
}
