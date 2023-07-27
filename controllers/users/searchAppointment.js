const { Usuarios, Pacientes, Citas, Doctores } = require("../../models");

module.exports = async (req, res) => {
    const { idCitas } = req.body;

   try {

    const citas = await Citas.findAll({
        // attributes: [["id_pacientes", "paciente"],"id_doctores" ,"id"],
        attributes: { exclude: ["createdAt", "updatedAt"]},
        where: {
           id: idCitas,
        },
    });

    const idPaciente = citas.id_pacientes;
    const idDoctor = citas.id_doctores;

    console.log(idDoctor);

        // const cita = await Citas.findAll({
        //     attributes: ["fecha","id"],
        //     where: {
        //         id_pacientes: idPaciente,
        //         id_doctores: idDoctor,
        //     },
        //     include: [
        //     {
        //             model: Doctores,
        //             as: "doctores",
        //             attributes: {
        //                 exclude: ["createdAt", "updatedAt", "contrasena", "id_rol"],
        //             },
        //             include: [
        //                 {
        //                     model: Usuarios,
        //                     as: "usuario",
        //                     attributes: {
        //                         exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id", "fecha_nacimiento", "email", "telefono", "direccion"],
        //                     },
        //                 },
        //             ],
        //     },
        //     {
        //             model: Pacientes,
        //             as: "pacientes",
        //             attributes: {
        //                 exclude: ["createdAt", "updatedAt", "contrasena", "id_rol"],
        //             },
        //             include: [
        //                 {
        //                     model: Usuarios,
        //                     as: "usuario",
        //                     attributes: {
        //                         exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id", "fecha_nacimiento", "email", "telefono", "direccion"],
        //                     },
        //                 },
        //             ],
        //     },
        //     ],
        // });

        res.status(200).json(citas);

   } catch (error) {

      const statusCode =
         error.name == "SequelizeUniqueConstraintError" ||
         error.name == "SequelizeValidationError"
            ? 400
            : 500;

      res.status(statusCode).json({
         status: "Error",
         message: error.message,
      });
   }
};