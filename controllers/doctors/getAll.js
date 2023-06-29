const { Usuarios, Roles, Doctores, Pacientes } = require("../../models");

module.exports = async (req, res) => {
   let { page } = req.query;
   const LIMIT =2;
   page = +page;

   if(!page || page < 0) page = 1;

   try {
      
      const cont = await Usuarios.count();
      const totalPaginacion = Math.ceil(cont/LIMIT);

      if(page <= totalPaginacion){

         const users = await Pacientes.findAll({
            limit: LIMIT,
            offset : (page-1)*LIMIT,
            attributes: { exclude: ["createdAt", "updatedAt", "id_pacientes"]},
         // attributes: ["id", ["user_name", "name"], ["user_last_name", "last_name"],],
            include: [
               {
                  model: Usuarios,
                  as: "usuarios",
                  attributes: {
                     exclude: ["createdAt", "updatedAt", "contrasena", "id_rol"],
                  },
               },
            ],
         });

         res.status(200).json(users);
         // res.status(200).json({
         //    info: {
         //       page: page,
         //    },
         //    results: users,
         // });
      }

   } catch (error) {
      res.status(500).json({
         status: "error",
         message: "Falla todo",
      });
      res.status(404).json({
         status: "error",
         message: "Has superado el limite de datos",
      });
   }
};
