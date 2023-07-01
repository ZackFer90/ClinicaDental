const express = require('express');
const adminController = require("../controllers/admin");
const { verify } = require('jsonwebtoken');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", verifyToken, isAdmin, adminController.getAllDoctor);

router.post("/register-doctor", verifyToken, isAdmin, adminController.registerDoctor);

module.exports = router;