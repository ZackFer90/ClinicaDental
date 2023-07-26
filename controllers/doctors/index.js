const doctorController = {};

doctorController.getAll = require("../doctors/getAll");
doctorController.createAppointment = require("./createAppointment");
doctorController.getAppointment = require("./getAppointment");
doctorController.getMyAppointment = require("./getMyAppointment");
doctorController.deleteAppointment = require("./deleteAppointment");

module.exports = doctorController;