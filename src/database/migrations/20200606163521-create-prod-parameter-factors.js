
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('prod_parameter_factors', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    factor_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_factors',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    parameter_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_parameters',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('prod_parameter_factors'),
};
