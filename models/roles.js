'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Roles {1..n}--{1} Usuarios
      Roles.hasMany(models.Usuarios, {
        as: "usuarios",
        foreignKey: "id", // foreingnKey
     });
    }
  }
  Roles.init({
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
    tableName: 'roles',
  });
  return Roles;
};