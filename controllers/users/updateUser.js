const { Usuarios } = require("../../models");

module.exports = async (req, res) => {
   const { userId } = req;
   
   try {
      const  modifyUser = {...req.body};
      await Usuarios.update(modifyUser, {where: {id: userId}});
   

    //   const newAppointment = {
    //     nombrePaciente,
    //     nombreDoctor,
    //   };

    //    await Citas.create(newAppointment);

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
