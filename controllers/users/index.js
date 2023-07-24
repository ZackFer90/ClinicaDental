const userController = {};


userController.getAll = require("./getAll");
userController.getDoctor = require("./getDoctor");
userController.createAppointment = require("./createAppointment");
userController.updateUser = require("./updateUser");
userController.getAppointment = require("./getAppointment");
userController.updateAppointment = require("./updateAppointment");
userController.deleteAppointment = require("./deleteAppointment");

module.exports = userController;