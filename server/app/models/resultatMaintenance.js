'use strict';
module.exports = (sequelize, DataTypes) => {
  const resultatMaintenance = sequelize.define('resultatMaintenance', {
    maintenanceCalc: DataTypes.FLOAT,
    priseDeMasseCalc: DataTypes.FLOAT,
    objectiSecheCalc: DataTypes.FLOAT,
  }, {});
  resultatMaintenance.associate = function (models) {
    resultatMaintenance.belongsTo(models.Calculateur, {
      onDelete: 'cascade',
      hooks: true
    })
  };
  return resultatMaintenance;
};