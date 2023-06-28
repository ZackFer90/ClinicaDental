const express = require('express');
const userController = require("../controllers/users");
const { verify } = require('jsonwebtoken');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get("/", userController.getAll);

router.post("/create-Appointment", verifyToken, userController.createAppointment);

router.put("/update-user", userController.updateUser);

module.exports = router;
