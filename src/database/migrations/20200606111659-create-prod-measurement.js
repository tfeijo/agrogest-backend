
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('prod_measurements', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    system_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_activities',
        key: 'id',
      },
      onUpdate: 'CASCADE',
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
  down: (queryInterface) => queryInterface.dropTable('prod_measurements'),
};
