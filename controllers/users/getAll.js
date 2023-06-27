const { Usuarios, Roles, Doctores } = require("../../models");

module.exports = async (req, res) => {
   let { page } = req.query;
   const LIMIT =2;
   page = +page;
   

   if(!page || page < 0) page = 1;

   try {
      
      const cont = await Usuarios.count();
      const totalPaginacion = Math.ceil(cont/LIMIT);
      
      if(page <= totalPaginacion){
         console.log("pageeeeeeee :"+ page);
         const users = await Usuarios.findAll({
            limit: LIMIT,
            offset : (page-1)*LIMIT,
            attributes: { exclude: ["createdAt", "updateAt"]},
         // attributes: ["id", ["user_name", "name"], ["user_last_name", "last_name"],],
            include: [
               {
                  model: Roles,
                  as: "roles",
                  attributes: {
                     exclude: ["createdAt", "updatedAt"],
                  }
               },
               {
                  model: Doctores,
                  as: "doctores",
                  attributes: {
                     exclude: ["createdAt", "updatedAt"],
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
         res.status(404).json({
            status: "error",
            message: "Has superado el limite de datos",
         });

   } catch (error) {
      res.status(500).json({
         status: "error",
         message: "Falla todo",
      });
   }
};
