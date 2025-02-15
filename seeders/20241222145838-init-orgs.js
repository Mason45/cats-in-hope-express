'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orgs', [{
      orgName: 'Cat in Hope HK',
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Orgs', [{
      orgName: 'ABC Org',
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Orgs', [{
      orgName: 'CBC Org',
      createdBy: 'System'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orgs', null, {});
  }
};
