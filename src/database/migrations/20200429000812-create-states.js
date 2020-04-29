'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('states', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      state_name: {
        type: Sequelize.STRING,
        allowNull: false,        
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: false,       
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,       
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,       
      },
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('states');

  }
};
