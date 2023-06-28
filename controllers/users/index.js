const userController = {};


userController.getAll = require("./getAll");
userController.createAppointment = require("./createAppointment");
userController.updateUser = require("./updateUser");

module.exports = userController;