const { Usuarios, Pacientes, Citas } = require("../../models");

module.exports = async (req, res) => {
   const { doctorId } = req;
   const { nombrePatient, fecha } = req.body;

   try {
    const usuario = await Usuarios.findOne({
      attributes: ["id"],
      where: {
         nombre: nombrePatient, 
      },
    });

    const patient = await Pacientes.findOne({
      attributes: ["id"],
      where: {
         id_pacientes: usuario.id, 
      },
    });
    
      const newAppointment = {
         id_pacientes: patient.id,
         id_doctores: doctorId,
         fecha: fecha,
      };



      await Citas.create(newAppointment);

      res.status(201).json({
         message: "Created succesfully",
      });
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
