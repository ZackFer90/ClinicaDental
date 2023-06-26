const jwt = require("jsonwebtoken");


// Generar token, login
const generateToken = (payload) => 
    jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
    });

 //Extrae el token del req, verifyToken
const getTokenFromHeader = (headers) =>{
    const { authorization } = headers;

    if (!authorization) return null;
    else return authorization.split(" ")[1];
}

 

 // Decodificar token, verifyToken
 const decodedToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

 module.exports = {
    generateToken,
    getTokenFromHeader,
    decodedToken,
 };