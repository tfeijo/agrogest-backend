
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('cities', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fiscal_module: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('cities'),
};
