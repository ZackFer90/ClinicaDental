const { Usuarios, Doctores, Citas } = require("../../models");

module.exports = async (req, res) => {
   const { userId, patientId  } = req;
   const { nombreDoctor, fecha} = req.body;

   try {
    console.log(nombreDoctor);
    const Usuario = await Usuarios.findOne({
      attributes: ["id"],
      where: {
         nombre: nombreDoctor, 
      },
    });

    const Doctor = await Doctores.findOne({
      attributes: ["id"],
      where: {
         id_doctores: Usuario.id, 
      },
    });
    
      const newAppointment = {
         id_pacientes: patientId,
         id_doctores: Doctor.id,
         fecha: fecha,
      };

      console.log(newAppointment);

      await Citas.create(newAppointment);

      res.status(201).json({
         message: "Created succesfully",
      });
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
