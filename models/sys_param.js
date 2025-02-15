'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SysParam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SysParam.init({
    code: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SysParam',
  });
  return SysParam;
};