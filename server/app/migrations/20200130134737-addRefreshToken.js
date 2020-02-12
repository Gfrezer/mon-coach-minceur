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
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Users',
      'email',
      'password'
    );
  }
}