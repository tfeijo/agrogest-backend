const { Model, DataTypes } = require('sequelize');

class Land extends Model {
  static init(sequelize) {
    super.init(
      {
        installation_id: DataTypes.STRING,
        licensing: DataTypes.BOOLEAN,
        hectare: DataTypes.FLOAT,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.SizeLand, { foreignKey: 'size_id', as: 'size' });
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' });
  }
}

module.exports = Land;
