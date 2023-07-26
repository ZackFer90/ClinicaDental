const { Usuarios, Citas, Pacientes } = require("../../models");

module.exports = async (req, res) => {
    const { doctorId } = req;
    const { nombrePaciente, fecha } = req.body;


   try {

    const user = await Usuarios.findOne({
        attributes: ["id"],
        where: {
           nombre: nombrePaciente, 
        },
      });

      const idUser =user.id;

      const patient = await Pacientes.findOne({
        attributes: ["id"],
        where: {
           id_doctores: idUser, 
        },
      });

      const idPatient =patient.id;

      const cita = await Citas.findOne({
        attributes: ["id"],
        where: {
           id_doctores: idPatient, 
        },
      });

      const fechaHora = `${fecha}T00:00:00.000Z`

      if(cita == null){
        res.status(201).json({
            message: "Doctor doesn't exist in Citas",
         });
      }else{
        await Citas.destroy(
            {where: {
               id_pacientes: idPatient,
               id_doctores: doctorId,
               fecha: fechaHora,
            },
        });

        res.status(201).json({
            message: "Created succesfully",
         });
      }

   } catch (error) {
      console.log(error.name);

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