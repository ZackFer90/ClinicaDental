'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Citas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Citas {1}--{1..n} Doctores
      Citas.hasMany(models.Doctores, {
        as: "doctores",
        foreignKey: "id_doctores", // foreingnKey
      });

      // Citas {1}--{1..n} Pacientes
      Citas.hasMany(models.Pacientes, {
        as: "pacientes",
        foreignKey: "id_pacientes", // foreingnKey
      });

    }
  }
  Citas.init({
    id_pacientes: DataTypes.INTEGER,
    id_doctores: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Citas',
    tableName: 'citas',
  });
  return Citas;
};