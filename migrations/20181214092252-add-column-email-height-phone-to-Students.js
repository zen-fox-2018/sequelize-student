'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return Promise.all([
      queryInterface.addColumn('Students','email', {type:Sequelize.STRING}),
      queryInterface.addColumn('Students','height', {type:Sequelize.INTEGER}),
      queryInterface.addColumn('Students','phone', {type:Sequelize.STRING})

    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn('Students','email'),
      queryInterface.removeColumn('Students','height'),
      queryInterface.removeColumn('Students','phone')

    ])
  }
};
