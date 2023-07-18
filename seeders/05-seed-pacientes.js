'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pacientes",
      [
        {
          id_pacientes: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pacientes: 33,
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
