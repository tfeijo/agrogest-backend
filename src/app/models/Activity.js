const { Model, DataTypes } = require('sequelize');

class Activity extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'prod_activities',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.System,
      { foreignKey: 'activity_id', as: 'systems' });

    this.hasMany(models.Parameter,
      { foreignKey: 'activity_id', as: 'parameters' });
  }
}

module.exports = Activity;
