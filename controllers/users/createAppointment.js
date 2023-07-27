const { Usuarios, Doctores, Citas } = require("../../models");

module.exports = async (req, res) => {
   const { patientId } = req;
   const { nombreDoctor, fecha } = req.body;

   try {
    const usuario = await Usuarios.findOne({
      attributes: ["id"],
      where: {
         nombre: nombreDoctor, 
      },
    });

    const doctor = await Doctores.findOne({
      attributes: ["id"],
      where: {
         id_doctores: usuario.id, 
      },
    });
    console.log(patientId);
      const newAppointment = {
         id_pacientes: patientId,
         id_doctores: doctor.id,
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
