'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MedicalRecords', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      }, 
      note: {
        type: Sequelize.STRING,
      },
      medical_date: {
        type: Sequelize.DATE,
      },
      residentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Residents',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      medicalReasonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SysParams',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MedicalRecords');
  }
};
