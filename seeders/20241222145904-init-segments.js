'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SysSegments', [
      {
      code: 'INTAKE_REASON', createdBy: 'System'
    }, {
      code: 'INTAKE_LOCATION', createdBy: 'System'
    }, {
      code: 'BREED', createdBy: 'System'
    }, {
      code: 'RESIDENT_STATUS', createdBy: 'System'
    }, {
      code: 'LEVEL_REASON', createdBy: 'System'
    }, {
      code: 'MEDICAL_REASON', createdBy: 'System'
    }, {
      code: 'COLOR', createdBy: 'System'
    }, {
      code: 'CHARACTER', createdBy: 'System'
    }, {
      code: 'CIH_NUMBER', createdBy: 'System'
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SysSegments', null, {});
  }
};
