'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shelters', [{
      shelterName: 'Tai Po',
      // shelterLocation: '地下3號舖, 大埔翠樂街11號美豐花園, Tai Po',
      orgId: 1,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Shelters', [{
      shelterName: 'Wong Tai Sin',
      // shelterLocation: '九龍黃大仙竹園廣場1樓S113號商舖,',
      orgId: 1,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Shelters', [{
      shelterName: 'Chubbys Pizza',
      // shelterLocation: '177 Hing Fong Rd, Kwai Chung,',
      orgId: 2,
      createdBy: 'System'
    }], {});
    await queryInterface.bulkInsert('Shelters', [{
      shelterName: 'For Org 3',
      // shelterLocation: 'Org address',
      orgId: 3,
      createdBy: 'System'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Shelters', null, {});
  }
};
