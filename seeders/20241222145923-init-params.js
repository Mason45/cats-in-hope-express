'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SysParams', [
      {
      segmentCode: 'BREED', code: 'HONG_STYLE', value: 'Kong Short', valueChi: '港短', createdBy: 'System'
    },
    {
      segmentCode: 'BREED', code: 'ENGLAND_STYLE', value: 'England Short', valueChi: '英短', createdBy: 'System'
    },
    {
      segmentCode: 'INTAKE_REASON', code: 'ABANDONED', value: 'Abandoned', valueChi: '被棄養', createdBy: 'System'
    },
    {
      segmentCode: 'INTAKE_REASON', code: 'ON_THE_ROAD', value: 'On the road', valueChi: '在馬路', createdBy: 'System'
    },
    {
      segmentCode: 'INTAKE_LOCATION', code: 'TUNG_SHING_LEI', value: 'Tung Shing Lei', valueChi: '元朗東成里', createdBy: 'System'
    },
    {
      segmentCode: 'INTAKE_LOCATION', code: 'WEST_KOWLOON', value: 'West Kowloon', valueChi: '西九文化區', createdBy: 'System'
    },
    {
      segmentCode: 'RESIDENT_STATUS', code: 'NORMAL', value: 'Normal', valueChi: '普通', createdBy: 'System'
    },
    {
      segmentCode: 'RESIDENT_STATUS', code: 'FOR_ADOPTED', value: 'For Adopted', valueChi: '可被領養', createdBy: 'System'
    },
    {
      segmentCode: 'RESIDENT_STATUS', code: 'ADOPTED', value: 'Adopted', valueChi: '已被領養', createdBy: 'System'
    },
    {
      segmentCode: 'LEVEL_REASON', code: 'ADOPTED', value: 'Adopted', valueChi: '已被領養', createdBy: 'System'
    },
    {
      segmentCode: 'LEVEL_REASON', code: 'PASS_AWAY', value: 'Go to Heaven', valueChi: '上天堂', createdBy: 'System'
    },
    {
      segmentCode: 'MEDICAL_REASON', code: 'GET_INJECT', value: 'Get Inject', valueChi: '打針', createdBy: 'System'
    },
    {
      segmentCode: 'COLOR', code: 'GREEN', value: 'Green', valueChi: '綠色', createdBy: 'System'
    },
    {
      segmentCode: 'COLOR', code: 'ORANGE', value: 'Orange', valueChi: '橙色', createdBy: 'System'
    },
    {
      segmentCode: 'COLOR', code: 'WHITE', value: 'White', valueChi: '白色', createdBy: 'System'
    },
    {
      segmentCode: 'COLOR', code: 'BLACK', value: 'Black', valueChi: '黑色', createdBy: 'System'
    },
    {
      segmentCode: 'CHARACTER', code: 'AFFECTIONATE', value: 'Affectionate', valueChi: '情深款款', createdBy: 'System'
    },
    {
      segmentCode: 'CHARACTER', code: 'GENTLE', value: 'Gentle', valueChi: '溫和', createdBy: 'System'
    },
    {
      segmentCode: 'CHARACTER', code: 'SWEET', value: 'Sweet', valueChi: '甜美', createdBy: 'System'
    },
    {
      segmentCode: 'CIH_NUMBER', code: 'CURR_NUMBER', value: '0', valueChi: '0', createdBy: 'System'
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SysParams', null, {});
  }
};
