
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('parameter_factors', {
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
        model: 'polluition_factors',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    parameter_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prodsystem_parameters',
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

  down: (queryInterface) => queryInterface.dropTable('parameter_factors'),
};
