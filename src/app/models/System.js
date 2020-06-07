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
    this.hasMany(models.Measurement, {
      foreignKey: 'system_id',
      as: 'measurements',
    });
    this.belongsTo(models.Activity, {
      foreignKey: 'activity_id',
      as: 'activity',
    });
    this.hasMany(models.Parameter,
      {
        foreignKey: 'system_id',
        as: 'parameters',
      });
    this.hasMany(models.Handling,
      {
        foreignKey: 'system_id',
        as: 'handlings',
      });
  }
}

module.exports = System;
