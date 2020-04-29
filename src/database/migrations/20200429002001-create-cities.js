'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('cities', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      city_name: {
        type: Sequelize.STRING,
        allowNull: false,        
      },
      biome: {
        type: Sequelize.STRING,
        allowNull: false,       
      },
      fiscal_module: {
        type: Sequelize.INTEGER,
        allowNull: false,       
      },
      state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'id'
        }
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
  
    return queryInterface.dropTable('cities');

  }
};
