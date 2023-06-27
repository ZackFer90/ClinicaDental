const userController = {};

userController.getAll = require("./getAll");
// userController.prueba = require("./prueba");
userController.createAppointment = require("./createAppointment");
userController.updateUser = require("./updateUser");

module.exports = userController;
