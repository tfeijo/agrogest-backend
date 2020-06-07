
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('land_parameters', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    land_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'lands',
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

  down: (queryInterface) => queryInterface.dropTable('land_parameters'),
};
