const { Usuarios, Citas, Pacientes, Doctores } = require("../../models");

module.exports = async (req, res) => {
    const  modifyAppoint = {...req.body};

   try {

      const cita = await Citas.findOne({
         where: {
            id: modifyAppoint.idCita, 
         },
       });

       if(cita != null){

         //Sacar la id de doctor

         const user = await Usuarios.findOne({
         attributes: ["id"],
            where: {
               nombre: modifyAppoint.nombreDoctor, 
            },
         });

         const idUserDoc =user.id;

         const doctor = await Doctores.findOne({
         attributes: ["id"],
         where: {
            id_doctores: idUserDoc, 
         },
         });

         const idDoctor =doctor.id;

         //Sacar la id de paciente

         const user1 = await Usuarios.findOne({
            attributes: ["id"],
               where: {
                  nombre: modifyAppoint.nombrePatient, 
               },
            });
   
            const idUserPat =user1.id;
   
            const patient = await Pacientes.findOne({
            attributes: ["id"],
               where: {
                  id_pacientes: idUserPat, 
               },
            });

            const idPatient =patient.id;

            //Modificar cita

         await Citas.update({
            id_doctores: idDoctor,
            id_pacientes: idPatient,
            fecha: modifyAppoint.fecha}, 
            {where: {
                  id: modifyAppoint.idCita
                },
        });

      
         res.status(201).json({
            message: "Created succesfully",
         });
      }else{ 

         res.status(201).json({
            message: "Doctor doesn't exist in Citas",
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
