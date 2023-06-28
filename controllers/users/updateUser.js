const { Usuarios } = require("../../models");

module.exports = async (req, res) => {
   console.log("eentraaaaaaaaa");
   try {
      const  apellidos = {...req.body};
      await Usuarios.update(apellidos, {where: {id: 1}});
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
