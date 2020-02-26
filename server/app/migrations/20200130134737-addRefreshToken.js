'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'email',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'password',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Users',
        'isAdmin',
        //TODO : rajouter la valeur false par défaut
        Sequelize.BOOLEAN
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Users',
      'email',
      'password',
      'isAdmin'
    );
  }
}