'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aliment = sequelize.define('Aliment', {
    nom: DataTypes.STRING,
    glucides: DataTypes.FLOAT,
    lipides: DataTypes.FLOAT,
    proteines: DataTypes.FLOAT,
    calories: DataTypes.FLOAT
  }, {});
  Aliment.associate = function (models) {
    Aliment.belongsTo(models.User)
  };
  return Aliment;
};