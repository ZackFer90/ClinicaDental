'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "especializacion",
      [
        {
          especialidad: "Odontologia general",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          especialidad: "Endodoncia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          especialidad: "Patología maxilofacial y oral",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          especialidad: "Cirugía oral y maxilofacial",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          especialidad: "Ortodoncia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          especialidad: "Prostodoncia y odontología protésica",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          especialidad: "Odontopediatría",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          especialidad: "Periodoncia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
   );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("especializacion", {
      [Op.or]: [
         { especialidad: "Odontologia general" },
         { especialidad: "Endodoncia" },
         { especialidad: "Patología maxilofacial y oral" },
         { especialidad: "Cirugía oral y maxilofacial" },
         { especialidad: "Ortodoncia" },
         { especialidad: "Prostodoncia y odontología protésica" },
         { especialidad: "Odontopediatría" },
         { especialidad: "Periodoncia" },
      ],
    });
  }
};
