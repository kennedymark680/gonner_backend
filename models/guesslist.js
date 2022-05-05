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
      GuessList.belongsTo(models.Movie, { foreignKey: 'movieId' })
      GuessList.hasMany(models.Character, { foreignKey: 'guesslistId' })
    }
  }
  GuessList.init(
    {
      name: DataTypes.STRING,
      score: DataTypes.INTEGER,
      movieId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'movies',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'GuessList',
      tableName: 'guesslists'
    }
  )
  return GuessList
}
