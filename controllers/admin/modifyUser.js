const { successMsg } = require("../../_utils/messages");
const { Usuarios } = require("../../models");

module.exports = async (req, res) => {
    const { id } = req.body;


   try {

    const  modifyUser = {...req.body};
    await Usuarios.update(modifyUser, {where: {id: id}});
        
    res.status(200).json({
        message: successMsg.UPDATE,
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