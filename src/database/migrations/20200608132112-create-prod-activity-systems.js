
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('prod_activity_systems', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    activity_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'prod_activities',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('prod_activity_systems'),
};
