const { Usuarios } = require("../../models");

/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   const { apellidos} = req.body;
    const idPaciente = 1;
   try {
    console.log("Volaaaareeeeeee");
    await Usuarios.Update(
        {
            // nombre: nombre,
            apellidos: apellidos,
            // email: email,
            // contrasena: contrasena,
            // fecha_nacimiento: fecha_nacimiento,
        },
        {
            where: {
              id: idPaciente,
            },
        },
    );
    console.log("ooooooooooooooooooooooh");

    //   const newAppointment = {
    //     nombrePaciente,
    //     nombreDoctor,
    //   };

    //    await Citas.create(newAppointment);

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
