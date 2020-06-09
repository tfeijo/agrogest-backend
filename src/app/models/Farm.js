const { Model, DataTypes } = require('sequelize');

class Farm extends Model {
  static init(sequelize) {
    super.init(
      {
        installation_id: DataTypes.STRING,
        licensing: DataTypes.BOOLEAN,
        hectare: DataTypes.FLOAT,
      },
      {
        sequelize,
        tableName: 'lands',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.SizeFarm, { foreignKey: 'size_id', as: 'size' });
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' });
    this.belongsToMany(models.Parameter,
      {
        foreignKey: 'parameter_id',
        through: 'farm_parameters',
        as: 'parameters',
      });
  }
}

module.exports = Farm;
