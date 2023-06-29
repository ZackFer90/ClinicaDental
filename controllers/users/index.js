const userController = {};


userController.getAll = require("./getAll");
userController.createAppointment = require("./createAppointment");
userController.updateUser = require("./updateUser");
userController.getAppointment = require("./getAppointment");

module.exports = userController;