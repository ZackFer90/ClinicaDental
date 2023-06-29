const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const { Roles, Usuarios, Pacientes, Doctores } = require("../../models");
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
         include: [{ model: Roles, as: "roles", },],
      });

      let patient = 0;
      let doctor = 0;

      if(user.roles.rol == "user"){
         patient = await Pacientes.findOne({
            where: {
               id_pacientes: user.id,
            },
         });

      }else if(user.roles.rol == "doctor"){
         doctor = await Doctores.findOne({
            where: {
               id_doctores: user.id,
            },
         });

      }

      if (!user) {
         return res.status(400).json({
            status: "Error",
            message: "These credentials do not match our records",
         });
      }

      console.log(user.roles.rol);

      const token = generateToken({
         userId: user.id,
         patientId: patient.id,
         doctorId: doctor.id,
         userNom: user.nombre,
         userRole: user.roles.rol,
      });

      const isMatch = bcrypt.compareSync(contrasena, user.contrasena);
      
      if (!isMatch) {
         return res.status(400).json({
            status: "Error",
            message: "These credentials do not match our records",
         });
      }
      
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
