
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('prod_parameters', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    state_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'states',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    activity_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_activities',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    system_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_systems',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    handling_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'prod_handling',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    measurement_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_measurements',
        key: 'id',
      },
      onUpdate: 'CASCADE',
    },
    minimum: {
      type: Sequelize.INTEGER,
    },
    small: {
      type: Sequelize.INTEGER,
    },
    medium: {
      type: Sequelize.INTEGER,
    },
    large: {
      type: Sequelize.INTEGER,
    },
    exceptional: {
      type: Sequelize.INTEGER,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('prod_parameters'),
};
