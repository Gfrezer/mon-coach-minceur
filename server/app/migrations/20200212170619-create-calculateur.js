'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Calculateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      poids: {
        type: Sequelize.FLOAT
      },
      tauxDeGraisse: {
        type: Sequelize.FLOAT
      },
      multiplicateurActivite: {
        type: Sequelize.FLOAT
      },
      maintenance: {
        type: Sequelize.FLOAT
      },
      surplusPriseMasse: {
        type: Sequelize.FLOAT
      },
      deficiteSeche: {
        type: Sequelize.FLOAT
      },
      objectifPriseMasse: {
        type: Sequelize.FLOAT
      },
      objectifSeche: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Calculateurs');
  }
};