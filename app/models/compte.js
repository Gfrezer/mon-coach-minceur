'use strict';
module.exports = (sequelize, DataTypes) => {
  const Compte = sequelize.define('Compte', {
    pseudo: DataTypes.STRING,
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    telephone: DataTypes.STRING
  }, {});
  Compte.associate = function (models) {
    Compte.belongsTo(models.User)
  };
  return Compte;
};