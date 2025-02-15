'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ResidentCharacters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      characterId: {
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
     // Add indexes for better query performance
     await queryInterface.addIndex('ResidentCharacters', ['residentId', 'characterId'], {
      unique: true,
      name: 'resident_character_unique'
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ResidentCharacters');
  }
};
