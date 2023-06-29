const doctorController = {};

doctorController.getAll = require("../doctors/getAll");
doctorController.createAppointment = require("./createAppointment");
doctorController.getAppointment = require("./getAppointment");

module.exports = doctorController;