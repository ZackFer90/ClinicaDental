const { Usuarios, Pacientes, Citas, Doctores } = require("../../models");

module.exports = async (req, res) => {
    const { patientId } = req;
    const { idCitas } = req.body;

   try {

   //  const citas = await Citas.findAll({
   //      // attributes: [["id_pacientes", "paciente"],"id_doctores" ,"id"],
   //      attributes: { exclude: ["createdAt", "updatedAt"]},
   //      where: {
   //         id: idCitas,
   //         id_pacientes: patientId,
   //      },
   //  });

   //  const idPaciente = citas.id_pacientes;
   //  const id =citas.id;
   //  const idDoctor = citas.id_doctores;

   //  console.log(id);
   //  console.log(idPaciente);
   //  console.log(idDoctor);
   //  console.log(citas.fecha);
   //  console.log(citas);

        const cita = await Citas.findAll({
            attributes: ["fecha","id"],
            include: [
            {
                    model: Doctores,
                    as: "doctores",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id"],
                    },
                    include: [
                        {
                            model: Usuarios,
                            as: "usuario",
                            attributes: {
                                exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id", "fecha_nacimiento", "email", "telefono", "direccion"],
                            },
                        },
                    ],
            },
            {
                    model: Pacientes,
                    as: "pacientes",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id"],
                    },
                    include: [
                        {
                            model: Usuarios,
                            as: "usuario",
                            attributes: {
                                exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id", "fecha_nacimiento", "email", "telefono", "direccion"],
                            },
                        },
                    ],
            },
            ],
            where: {
               id_pacientes: patientId,
               id: idCitas,
           },
        });

        res.status(200).json(cita);

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