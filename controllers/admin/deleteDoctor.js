const { successMsg } = require("../../_utils/messages");
const { Usuarios, Citas, Doctores} = require("../../models");

module.exports = async (req, res) => {
    const { id } = req.body;


   try {

    // const user = await Usuarios.findOne({
    //     attributes: ["id"],
    //     where: {
    //        nombre: nombreDoctor, 
    //     },
    //   });

      const idUser = id;

      const doctor = await Doctores.findOne({
        attributes: ["id"],
        where: {
           id_doctores: idUser, 
        },
      });

      const idDoctor = doctor.id;

      const cita = await Citas.findOne({
        attributes: ["id"],
        where: {
           id_doctores: idDoctor, 
        },
      });

      console.log(idUser);

      if(cita != null){

        await Citas.destroy(
            {where: {
                id_doctores: idDoctor,
            },
        });

        // await Doctor_especializacion.destroy(
        //     {where: {
        //         id_doctores: idUser,
        //     },
        // });

        await Doctores.destroy(
            {where: {
                id: idDoctor,
            },
        });

        await Usuarios.destroy(
            {where: {
                id: idUser,
            },
        });
        
        // res.status(200).json({
        //     message: successMsg.DELETE,
        //  });
      }else{

        // await Doctor_especializacion.destroy(
        //     {where: {
        //         id_doctores: idUser,
        //     },
        // });

        await Doctores.destroy(
            {where: {
                id: idDoctor,
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