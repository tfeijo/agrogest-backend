const { Model, DataTypes } = require('sequelize');

class Measurement extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'prod_measurements',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.System,
      {
        foreignKey: 'measurement_id',
        through: 'prod_system_measurements',
        as: 'systems',
      });
    this.hasMany(models.Parameter,
      { foreignKey: 'measurement_id', as: 'parameters' });
  }
}

module.exports = Measurement;
