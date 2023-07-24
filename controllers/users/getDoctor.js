const { Usuarios, Roles } = require("../../models");

module.exports = async (req, res) => {

   try {

         const doctor = await Usuarios.findAll({
            attributes: {
               exclude: [
                  "contrasena",
                  "id_rol",
                  "createdAt",
                  "updatedAt",
               ],
            },
            where: {
               id_rol: 3,
            },
         });
         
         res.status(200).json(doctor);

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