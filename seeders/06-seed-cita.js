'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "citas",
      [
        {
          id_pacientes: 1,
          id_doctores: 1,
          fecha: "2023-07-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 2,
          id_doctores: 3,
          fecha: "2023-07-15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 4,
          id_doctores: 5,
          fecha: "2023-07-15",
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
