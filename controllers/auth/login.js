const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const { Roles, Usuarios } = require("../../models");
const { generateToken } = require("../../_utils/token");

/**
 * Login user
 * Url example: [POST] http://localhost:3000/auth/login
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   const { email, contrasena } = req.body;

   try {
      const user = await Usuarios.findOne({
         where: {
            email: email,
         },
         include: [{ model: Roles, as: "roles" }],
      });

      if (!user) {
         return res.status(400).json({
            status: "Error",
            message: "These credentials do not match our records",
         });
      }

      const isMatch = bcrypt.compareSync(contrasena, user.contrasena);
      
      if (!isMatch) {
         return res.status(400).json({
            status: "Error",
            message: "These credentials do not match our records",
         });
      }

      console.log("Antes token "+user.id+" "+user.nombre+" "+user.id_rol);
      const token = generateToken({
         userId: user.id,
         userNom: user.nombre,
         userRole: user.id_rol,
      });
      console.log("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      console.log("tokenciiiiin "+token);
      
      res.status(200).json({
         token,
      });
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: error.message,
      });
   }
};
