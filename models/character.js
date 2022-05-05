'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsTo(models.GuessList, { foreignKey: 'guesslistId' })
    }
  }
  Character.init(
    {
      name: DataTypes.STRING,
      order: DataTypes.INTEGER,
      alive: DataTypes.BOOLEAN,
      guesslistId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'guesslists',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Character',
      tableName: 'characters'
    }
  )
  return Character
}
