const { Model, DataTypes } = require('sequelize');

class System extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'prod_systems',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Measurement,
      {
        foreignKey: 'system_id',
        through: 'prod_system_measurements',
        as: 'measurements',
      });

    this.belongsToMany(models.Activity,
      {
        foreignKey: 'system_id',
        through: 'prod_activity_systems',
        as: 'activities',
      });

    this.hasMany(models.Parameter,
      {
        foreignKey: 'system_id',
        as: 'parameters',
      });
    this.belongsToMany(models.Handling,
      {
        foreignKey: 'system_id',
        through: 'prod_system_handling',
        as: 'handling',
      });
  }
}

module.exports = System;
