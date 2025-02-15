'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      username: 'Mason',
      password: '99829892',
      orgId: 1,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Users', [{
      username: 'Ying',
      password: '12341234',
      orgId: 1,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Users', [{
      username: 'Ally',
      password: '31633163',
      orgId: 1,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Users', [{
      username: 'Tester',
      password: '31633163',
      orgId: 2,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Users', [{
      username: 'Tester2',
      password: '31633163',
      orgId: 2,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Users', [{
      username: 'Tester3',
      password: '31633163',
      orgId: 3,
      createdBy: 'System'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
