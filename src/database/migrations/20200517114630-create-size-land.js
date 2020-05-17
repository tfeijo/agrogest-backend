
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('size_land', {
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
  }),
  down: (queryInterface) => queryInterface.dropTable('size_land'),
};
