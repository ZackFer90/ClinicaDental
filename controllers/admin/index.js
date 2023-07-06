const adminController = {};

adminController.getAllDoctor = require("./geAllDoctor");
adminController.registerDoctor = require("./registerDoctor");
adminController.getAllPatients = require("./getAllPatients");

module.exports = adminController;