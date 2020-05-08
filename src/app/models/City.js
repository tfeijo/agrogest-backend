const { Model, DataTypes } = require('sequelize');

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        fiscal_module: DataTypes.INTEGER,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.State, { foreignKey: 'state_id', as: 'state' });
    this.belongsToMany(models.Biome, { foreignKey: 'city_id', through: 'city_biomes', as: 'biomes' });
  }
}

module.exports = City;
