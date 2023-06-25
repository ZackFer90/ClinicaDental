'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("doctor_especializacion", {
        id_doctores: {
           allowNull: false,
           primaryKey: true,
           type: Sequelize.INTEGER,
           references: {
              model: "doctores",
              key: "id_doctores",
           },
        },
        id_especializacion: {
           allowNull: false,
           primaryKey: true,
           type: Sequelize.INTEGER,
           references: {
              model: "especializacion",
              key: "id",
           },
        },
        createdAt: {
           allowNull: false,
           type: Sequelize.DATE,
        },
        updatedAt: {
           allowNull: false,
           type: Sequelize.DATE,
        },
     });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctor_especializacion');
  }
};