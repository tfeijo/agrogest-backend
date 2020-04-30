const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        city_name: Sequelize.STRING,
        biome: Sequelize.ARRAY(Sequelize.TEXT),
        fiscal_module: Sequelize.INTEGER,
        state: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = City;
