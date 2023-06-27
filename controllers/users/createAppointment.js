const { Usuarios, Doctores, Citas } = require("../../models");

/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   const { nombrePaciente,  nombreDoctor} = req.body;

   try {
    console.log(nombreDoctor);
    const idPaciente = await Usuarios.findOne({
      attributes: ["id"],
      where: {
         nombre: nombreDoctor, 
      },
    });

    console.log(idPaciente.id);

    //   const newAppointment = {
    //     nombrePaciente,
    //     nombreDoctor,
    //   };

    //    await Citas.create(newAppointment);

      res.status(201).json({
         message: "User created succesfully",
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
