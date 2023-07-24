'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "doctor_especializacion",
      [
        {
          id_doctores: 2,
          id_especializacion: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 6,
          id_especializacion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 11,
          id_especializacion: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 19,
          id_especializacion: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 24,
          id_especializacion: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_doctores: 27,
          id_especializacion: 6,
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
