const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:mysql90@localhost:3307/clinica_dental');

module.exports = sequelize;