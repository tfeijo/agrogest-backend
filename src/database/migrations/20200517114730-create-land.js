
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('lands', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    installation_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    size_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'size_land',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    licensing: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    hectare: {
      type: Sequelize.FLOAT,
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
  }),

  down: (queryInterface) => queryInterface.dropTable('lands'),
};
