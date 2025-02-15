'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resident extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Shelter, { foreignKey: 'shelterId', targetKey: 'id'});
      this.belongsTo(models.Org, { foreignKey: 'orgId', targetKey: 'id'});
      this.belongsTo(models.SysParam, { foreignKey: 'breedId', targetKey: 'id'});

    }
  }
  Resident.init({
    name: DataTypes.STRING,
    cihNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    neutered: DataTypes.BOOLEAN,
    neuteredDate: DataTypes.DATE,
    intakeDate: DataTypes.DATE,
    note: DataTypes.STRING,
    about: DataTypes.STRING,
    other: DataTypes.STRING,
    dewormed: DataTypes.BOOLEAN,
    dewormedDate: DataTypes.DATE,
    adopterName:DataTypes.STRING,
    adopterGender: DataTypes.STRING,
    adopterLocation: DataTypes.STRING,
    adopterContactNumber: DataTypes.INTEGER,
    orgId: DataTypes.INTEGER,
    breedId: DataTypes.INTEGER,
    intakeReasonId: DataTypes.INTEGER,
    intakeLocationId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    leaveReasonId: DataTypes.INTEGER,
    shelterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resident',
  });
  return Resident;
};