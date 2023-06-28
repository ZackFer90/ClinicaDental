module.exports = (req, res, next) => {
    const userRole = req.userRole;
 
    if (userRole == "doctor") {
       next();
    } else {
       res.status(403).json({
          status: "Error",
          message: `Don't have permission`,
       });
    }
 };