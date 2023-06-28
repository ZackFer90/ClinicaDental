const express = require('express');
const doctorController = require("../controllers/doctors");
const { verify } = require('jsonwebtoken');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isDoctor = require("../middlewares/isAdmin");

router.get("/", doctorController.getAll);

module.exports = router;