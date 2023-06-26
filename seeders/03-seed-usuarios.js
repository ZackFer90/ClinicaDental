'use strict';
const bcrypt = require("bcrypt");
const contra = "12345";
const contra1 = "67890";
const encryptedContra = bcrypt.hashSync(contra, 10);
const encryptedContra1 = bcrypt.hashSync(contra1, 10);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nombre: "Pablo",
          apellidos: "Perez",
          fecha_nacimiento: "1973-03-15",
          email: "pablo@gmail.com",
          contrasena: encryptedContra,
          telefono: "786543290",
          direccion: "C/Falsa 123",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Manuel",
          apellidos: "Gonzalez",
          fecha_nacimiento: "1998-08-20",
          email: "Manuel@gmail.com",
          contrasena: encryptedContra1,
          telefono: "981893191",
          direccion: "C/Diagonal 38",
          id_rol: "2",
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
