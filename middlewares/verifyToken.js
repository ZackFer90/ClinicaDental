const { getTokenFromHeader, decodedToken } = require("../_utils/token");

module.exports = (req, res, next) => {
   // verificar si hay token
   const token = getTokenFromHeader(req.headers);

   if (!token) {
      return res.status(401).json({
         status: "Error",
         message: "Not found",
      });
   }

   try {
      // decodificar token
      const decoded = decodedToken(token);

      // modificar el objeto Request
      req.userId = decoded.userId;
      req.patientId = decoded.patientId;
      req.doctorId = decoded.doctorId;
      req.userName = decoded.userName;
      req.userRole = decoded.userRole;

      // ejecutar la seguiente funcion en el ciclo de middelwares
      next();
   } catch (error) {
      res.status(400).json({
         status: "Error",
         message: "Invalid token",
      });
   }
};
