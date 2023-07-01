const bcrypt = require("bcrypt");
const { Usuarios, Doctores } = require("../../models");

/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   const { nombre, apellidos, fecha_nacimiento, email, contrasena } = req.body;

   if (contrasena.lenght < 8) {
      return res.status(400).json({
         status: "Error",
         message: "Password length can not be less than 8",
      });
   }

   try {
      const hash = bcrypt.hashSync(contrasena, 10);

      const newUser = {
         nombre,
         apellidos,
         email,
         contrasena: hash,
         fecha_nacimiento,
         id_rol: 3, // role = doctor
      };

      await Usuarios.create(newUser);

      const Usuario = await Usuarios.findOne({
         attributes: ["id"],
         where: {
            email: email, 
         },
      });

      const newDoctor = {
        id_doctores: Usuario.id
      }

      console.log(Usuario.id);

      await Doctores.create(newDoctor);

      res.status(201).json({
         message: "User created succesfully",
      });
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
