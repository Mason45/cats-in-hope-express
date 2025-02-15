'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Residents', [{
      name: '黃毛仔',
      gender: 'M',
      birthday: new Date(),
      createdBy: 'System',
      shelterId: 1,
      breedId: 1,
      intakeReasonId: 3,
      intakeLocationId: 3,
    }], {});
    await queryInterface.bulkInsert('Residents', [{
      name: '粟子',
      gender: 'M',
      birthday: new Date("2022-03-25"),
      createdBy: 'System',
      shelterId: 1,
      breedId: 1,
      intakeReasonId: 3,
      intakeLocationId: 3,
    }], {});
  },
  

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Residents', null, {});
  }
};
