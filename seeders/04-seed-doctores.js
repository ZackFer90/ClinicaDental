'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "doctores",
      [
        {
          id_doctores: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
