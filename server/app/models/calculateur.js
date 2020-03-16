'use strict';
module.exports = (sequelize, DataTypes) => {
  const Calculateur = sequelize.define('Calculateur', {
    poids: DataTypes.FLOAT,
    tauxDeGraisse: DataTypes.FLOAT,
    multiplicateurActivite: DataTypes.FLOAT,
    surplusPriseMasse: DataTypes.FLOAT,
    deficiteSeche: DataTypes.FLOAT,
  }, {});
  Calculateur.associate = function (models) {
    Calculateur.belongsTo(models.User, {
      onDelete: 'cascade',
      hooks: true
    })
    Calculateur.hasMany(models.resultatMaintenance);

  };
  return Calculateur;
};