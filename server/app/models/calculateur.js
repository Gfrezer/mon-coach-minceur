'use strict';
module.exports = (sequelize, DataTypes) => {
  const Calculateur = sequelize.define('Calculateur', {
    poids: DataTypes.FLOAT,
    tauxDeGraisse: DataTypes.FLOAT,
    multiplicateurActivite: DataTypes.FLOAT,
    maintenance: DataTypes.FLOAT,
    surplusPriseMasse: DataTypes.FLOAT,
    deficiteSeche: DataTypes.FLOAT,
    objectifPriseMasse: DataTypes.FLOAT,
    objectifSeche: DataTypes.FLOAT
  }, {});
  Calculateur.associate = function (models) {
    Calculateur.belongsTo(models.User)
  };
  return Calculateur;
};