'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'orgId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Orgs', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Shelters', 'orgId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Orgs', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Residents', 'orgId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Orgs', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Residents', 'shelterId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Shelters', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Residents', 'breedId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'SysParams', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Residents', 'intakeReasonId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'SysParams', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Residents', 'intakeLocationId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'SysParams', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Residents', 'statusId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'SysParams', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    await queryInterface.addColumn('Residents', 'leaveReasonId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'SysParams', // Name of the referenced table
        key: 'id',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    
    await queryInterface.addColumn('SysParams', 'segmentCode', {
      type: Sequelize.STRING,
      references: {
        model: 'SysSegments', // Name of the referenced table
        key: 'code',       // Key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // or 'CASCADE' depending on your requirements
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'orgId');
    await queryInterface.removeColumn('Shelters', 'orgId');
    await queryInterface.removeColumn('Residents', 'orgId');
    await queryInterface.removeColumn('Residents', 'shelterId');
    await queryInterface.removeColumn('Residents', 'breedId');
    await queryInterface.removeColumn('Residents', 'intakeReasonId');
    await queryInterface.removeColumn('Residents', 'intakeLocationId');
    await queryInterface.removeColumn('Residents', 'statusId');
    await queryInterface.removeColumn('Residents', 'leaveReasonId');
    await queryInterface.removeColumn('SysParams', 'segmentCode');
  }
};
