'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Doctores {1..n}--{1..n} Especializacion
      Doctores.belongsToMany(models.Especializacion, {
        as: "especializacion",
        through: "doctores_especializacion",
        foreignKey: "id", // foreignKey
      });

      // Doctores {1}--{1} Usuarios
      Doctores.belongsTo(models.Usuarios, {
        as: "usuarios",
        foreignKey: "id_doctores", // foreignKey
      });

      Doctores.hasMany(models.Citas, {
        as: "citas",
        foreignKey: "id", // foreingnKey
      });
    }
  }
  Doctores.init({
    id_doctores: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctores',
    tableName: 'doctores',
  });
  return Doctores;
};