const { Model, DataTypes } = require('sequelize');

class Parameter extends Model {
  static init(sequelize) {
    super.init(
      {
        minimum: DataTypes.INTEGER,
        small: DataTypes.INTEGER,
        medium: DataTypes.INTEGER,
        large: DataTypes.INTEGER,
        exceptional: DataTypes.INTEGER,
        state_id: DataTypes.INTEGER,
        factor_id: DataTypes.INTEGER,
        activity_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: 'prodsystem_parameters',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.State,
      { foreignKey: 'state_id', as: 'state' });

    this.belongsTo(models.Activity,
      { foreignKey: 'activity_id', as: 'activitiy' });

    this.belongsTo(models.System,
      { foreignKey: 'system_id', as: 'systems' });

    this.belongsTo(models.Measurement,
      { foreignKey: 'measurement_id', as: 'measurement' });

    this.belongsToMany(models.PolluitionFactor,
      {
        foreignKey: 'parameter_id',
        through: 'parameter_factors',
        as: 'factors',
      });

    this.belongsToMany(models.Land,
      { foreignKey: 'land_id', through: 'land_parameters', as: 'lands' });
  }
}

module.exports = Parameter;
