const { Usuarios, Pacientes } = require("../../models");

module.exports = async (req, res) => {
   let { page } = req.query;
   const LIMIT =7;
   page = +page;

   if(!page || page < 0) page = 1;

   try {
      
      const cont = await Pacientes.count();
      const totalPaginacion = Math.ceil(cont/LIMIT);

      if(page <= totalPaginacion){

         const users = await Pacientes.findAll({
            limit: LIMIT,
            offset : (page-1)*LIMIT,
            attributes: { exclude: ["createdAt", "updatedAt", "id_pacientes"]},
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

         // res.status(200).json(users);
         res.status(200).json({
            info: {
               totalPage: totalPaginacion,
               rol: "patient",
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
