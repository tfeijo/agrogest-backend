const { Model, DataTypes } = require('sequelize');

class Biome extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.City, { foreignKey: 'biome_id', through: 'city_biomes', as: 'cities' });
  }
}

module.exports = Biome;
