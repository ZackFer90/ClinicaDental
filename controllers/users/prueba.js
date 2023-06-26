const { Usuarios, Roles, Doctores } = require("../../models");
const doctores = require("../../models/doctores");

module.exports = async (req, res) => {

   try {

         const users = await Usuarios.findAll({
            attributes: { exclude: ["createdAt", "updateAt"]},
            include: [
               {
                  model: Roles,
                  as: "roles",
                  attributes: {
                     exclude: ["createdAt", "updatedAt"],
                  },
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

   } catch (error) {
      res.status(500).json({
         status: "error",
         message: error.message,
      });
   }
};