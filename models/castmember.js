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
    }
  }
  CastMember.init(
    {
      name: DataTypes.STRING,
      alive: DataTypes.BOOLEAN,
      order: DataTypes.INTEGER,
      movie: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CastMember',
      tableName: 'castmembers'
    }
  )
  return CastMember
}
