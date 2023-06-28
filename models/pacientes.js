'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pacientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Pacientes {1}--{1} Usuarios
      Pacientes.belongsTo(models.Usuarios, {
        as: "usuarios",
        foreignKey: "id_pacientes", // foreignKey
      });

      Pacientes.hasMany(models.Citas, {
        as: "citas",
        foreignKey: "id", // foreingnKey
      });
    }
  }
  Pacientes.init({
    id_pacientes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pacientes',
    tableName: 'pacientes',
  });
  return Pacientes;
};