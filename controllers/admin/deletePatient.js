const { successMsg } = require("../../_utils/messages");
const { Usuarios, Citas, Pacientes } = require("../../models");

module.exports = async (req, res) => {
    const { id } = req.body;


   try {

    // const user = await Usuarios.findOne({
    //     attributes: ["id"],
    //     where: {
    //        nombre: nombrePaciente, 
    //     },
    //   });

      const idUser = id;

      const paciente = await Pacientes.findOne({
        attributes: ["id"],
        where: {
           id_pacientes: idUser, 
        },
      });

      const idPaciente = paciente.id;

      const cita = await Citas.findOne({
        attributes: ["id"],
        where: {
           id_pacientes: idPaciente,
        },
      });

      if(cita != null){
        await Citas.destroy(
            {where: {
                id_pacientes: idPaciente,
            },
        });

        await Pacientes.destroy(
            {where: {
                id: idPaciente,
            },
        });

        await Usuarios.destroy(
            {where: {
                id: idUser,
            },
        });
        
        res.status(200).json({
            message: successMsg.DELETE,
         });
      }else{

        await Pacientes.destroy(
            {where: {
                id: idPaciente,
            },
        });

        await Usuarios.destroy(
            {where: {
                id: idUser,
            },
        });
        
        res.status(200).json({
            message: successMsg.DELETE,
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