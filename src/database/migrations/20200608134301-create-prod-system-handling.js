
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('prod_system_handling', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    system_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_systems',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    handling_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_handling',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('prod_system_handling'),
};
