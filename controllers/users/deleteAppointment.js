const { Usuarios, Citas, Doctores } = require("../../models");

module.exports = async (req, res) => {
    const { patientId } = req;
    const { nombreDoctor, fecha } = req.body;


   try {

    const user = await Usuarios.findOne({
        attributes: ["id"],
        where: {
           nombre: nombreDoctor, 
        },
      });

      const idUser =user.id;

      const doctor = await Doctores.findOne({
        attributes: ["id"],
        where: {
           id_doctores: idUser, 
        },
      });

      const idDoctor =doctor.id;

      const cita = await Citas.findOne({
        attributes: ["id"],
        where: {
           id_doctores: idDoctor, 
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
                id_pacientes: patientId,
                 id_doctores: idDoctor,
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