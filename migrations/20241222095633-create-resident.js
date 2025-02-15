'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Residents', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING
      },
      cihNumber: {
        type: Sequelize.STRING,
        unique: true
      },
      gender: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      neutered: {
        type: Sequelize.BOOLEAN
      },
      neuteredDate: {
        type: Sequelize.DATE
      },
      intakeDate: {
        type: Sequelize.DATE
      },
      note: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      other: {
        type: Sequelize.STRING
      },
      dewormed: {
        type: Sequelize.BOOLEAN
      },
      dewormedDate: {
        type: Sequelize.DATE
      },
      adopterName: {
        type: Sequelize.STRING
      },
      adopterGender: {
        type: Sequelize.STRING
      },
      adopterLocation: {
        type: Sequelize.STRING
      },
      adopterContactNumber: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedBy: {
        allowNull: true,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Residents');
  }
};