'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Usuarios {1}--{1..n} Roles
      Usuarios.belongsTo(models.Roles, {
        as: "roles",
        foreignKey: "id", // foreingnKey
      });

      // Usuarios {1}--{1} Doctores
      Usuarios.hasOne(models.Doctores, {
        as: "doctores",
        foreignKey: "id_doctores", // foreingnKey
      });

      // Usuarios {1}--{1} Pacientes
      Usuarios.hasOne(models.Pacientes, {
        as: "pacientes",
        foreignKey: "id_paciente", // foreingnKey
      });

    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    id_rol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
    tableName: 'usuarios',
  });
  return Usuarios;
};