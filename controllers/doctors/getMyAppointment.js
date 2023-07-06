const { Usuarios, Pacientes, Citas, Doctores } = require("../../models");

module.exports = async (req, res) => {
    const { doctorId } = req;
   let { page } = req.query;
   const LIMIT =3;
   page = +page;

   if(!page || page < 0) page = 1;

   try {

    const cont = await Usuarios.count();
    const totalPaginacion = Math.ceil(cont/LIMIT);

    if(page <= totalPaginacion){
    const citas = await Citas.findAll({
        limit: LIMIT,
        offset : (page-1)*LIMIT,
        attributes: ["fecha"],
     // attributes: ["id", ["user_name", "name"], ["user_last_name", "last_name"],],
        include: [
           {
                model: Pacientes,
                as: "pacientes",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id"],
                },
                include: [
                    {
                        model: Usuarios,
                        as: "usuarios",
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id"],
                        },
                    },
                ],
            },
            {
                model: Doctores,
                as: "doctores",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id"],
                },
                include: [
                    {
                        model: Usuarios,
                        as: "usuarios",
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "contrasena", "id_rol", "id", "fecha_nacimiento", "email", "telefono", "direccion"],
                        },
                    },
                ],
            },
        ],
        where: {
            id_doctores: doctorId,
        },
    });

    res.status(200).json(citas);
    }
   } catch (error) {

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