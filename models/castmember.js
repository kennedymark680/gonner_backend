'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CastMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CastMember.belongsTo(models.Movie, { foreignKey: 'movieId' })
    }
  }
  CastMember.init(
    {
      name: DataTypes.STRING,
      alive: DataTypes.BOOLEAN,
      order: DataTypes.INTEGER,
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
      modelName: 'CastMember',
      tableName: 'castmembers'
    }
  )
  return CastMember
}
