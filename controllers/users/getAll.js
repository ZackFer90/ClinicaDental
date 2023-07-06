const { Usuarios, Roles } = require("../../models");

module.exports = async (req, res) => {
   const { userId } = req;

   try {

         const users = await Usuarios.findAll({
            attributes: {
               exclude: [
                  "contrasena",
                  "id_rol",
                  "createdAt",
                  "updatedAt",
               ],
            },
            where: {
               id: userId, 
            },
         });
         
         res.status(200).json(users);

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
