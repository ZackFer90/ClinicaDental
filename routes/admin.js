const express = require('express');
const adminController = require("../controllers/admin");
const { verify } = require('jsonwebtoken');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

router.get("/getAll-doctor", verifyToken, isAdmin, adminController.getAllDoctor);

router.get("/getAll-patient", verifyToken, isAdmin, adminController.getAllPatients);

router.post("/register-doctor", verifyToken, isAdmin, adminController.registerDoctor);

router.delete("/delete-patient", verifyToken, adminController.deletePatient);

router.delete("/delete-doctor", verifyToken, adminController.deleteDoctor);

router.put("/modify-user", verifyToken, adminController.modifyUser);

module.exports = router;