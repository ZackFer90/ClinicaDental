const express = require('express');
const doctorController = require("../controllers/doctors");
const { verify } = require('jsonwebtoken');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isDoctor = require("../middlewares/isDoctor");

router.get("/", verifyToken, isDoctor, doctorController.getAll);

router.post("/create-Appointment", verifyToken, isDoctor, doctorController.createAppointment);

router.get("/get-Appointment", verifyToken, isDoctor, doctorController.getAppointment);

router.get("/getMy-Appointment", verifyToken, isDoctor, doctorController.getMyAppointment);

module.exports = router;