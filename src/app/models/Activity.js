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
    this.hasMany(models.Parameter,
      { foreignKey: 'activity_id', as: 'parameters' });

    this.belongsToMany(models.System,
      {
        foreignKey: 'activity_id',
        through: 'prod_activity_systems',
        as: 'systems',
      });
  }
}

module.exports = Activity;
