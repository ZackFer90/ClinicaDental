const adminController = {};

adminController.getAllDoctor = require("./geAllDoctor");
adminController.registerDoctor = require("./registerDoctor");
adminController.getAllPatients = require("./getAllPatients");
adminController.deletePatient = require("./deletePatient");
adminController.deleteDoctor = require("./deleteDoctor");

module.exports = adminController;