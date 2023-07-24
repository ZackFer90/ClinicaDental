const { Usuarios, Roles, Doctores } = require("../../models");

module.exports = async (req, res) => {
   let { page } = req.query;
   const LIMIT =7;
   page = +page;

   if(!page || page < 0) page = 1;

   try {
      
      const cont = await Doctores.count();
      const totalPaginacion = Math.ceil(cont/LIMIT);

      if(page <= totalPaginacion){

         const doctors = await Doctores.findAll();

         const users = await Doctores.findAll({
            limit: LIMIT,
            offset : (page-1)*LIMIT,
            attributes: { exclude: ["createdAt", "updatedAt", "id_doctores"]},
         // attributes: ["id", ["user_name", "name"], ["user_last_name", "last_name"],],
            include: [
               {
                  model: Usuarios,
                  as: "usuario",
                  attributes: {
                     exclude: ["createdAt", "updatedAt", "contrasena"],
                  },
               },
            ],
         });

         const doctorEspecializacion = [];
         for (const doctor of doctors) {
            const especializacion = await doctor.getEspecializacion;
            // console.log(doctor);
            // doctorEspecializacion.push({
            //    id: doctor.id,
            //    especializacion: especializacion.especialidad,
            // });
            console.log(especializacion);
         }

         // const prueba = Doctores.getdoctores_especializacion();
         // console.log(doctorEspecializacion);

         // res.status(200).json(users);
         res.status(200).json({
            info: {
               totalPage: totalPaginacion,
               rol: "doctor",
               especializacion: doctorEspecializacion.length > 0 ? doctorEspecializacion : undefined,
            },
            results: users,
         });
      }else{
         res.status(200).json({
            status: "error",
            message: "Has superado el limite de datos",
         });
      }

   } catch (error) {
      res.status(500).json({
         status: "error",
         message: error.message,
      });
   }
};
