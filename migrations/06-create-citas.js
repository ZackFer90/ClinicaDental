'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('citas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pacientes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pacientes",
          key: "id",
       },
      },
      id_doctores: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "doctores",
          key: "id",
        },
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('citas');
  }
};