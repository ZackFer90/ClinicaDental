'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especializacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Especializacion {1..n}--{1..n} Doctores
      Especializacion.belongsToMany(models.Doctores, {
        as: "doctores",
        through: "doctor_especializacion",
        foreignKey: "id_especializacion", // foreignKey en students_courses
      });

    }
  }
  Especializacion.init({
    especialidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Especializacion',
    tableName: 'especializacion',
  });
  return Especializacion;
};