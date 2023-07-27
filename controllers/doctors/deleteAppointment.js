const { Usuarios, Citas, Pacientes } = require("../../models");

module.exports = async (req, res) => {
    const { doctorId } = req;
    const { idCita } = req.body;


   try {

        await Citas.destroy(
            {where: {
               id: idCita
            },
        });

        res.status(201).json({
            message: "Deleted succesfully",
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