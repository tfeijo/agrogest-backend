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
        activity_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: 'prod_parameters',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.State,
      { foreignKey: 'state_id', as: 'state' });

    this.belongsTo(models.Activity,
      { foreignKey: 'activity_id', as: 'activity' });

    this.belongsTo(models.System,
      { foreignKey: 'system_id', as: 'system' });

    this.belongsTo(models.Measurement,
      { foreignKey: 'measurement_id', as: 'measurement' });

    this.belongsToMany(models.Factor,
      {
        foreignKey: 'parameter_id',
        through: 'prod_parameter_factors',
        as: 'factors',
      });

    this.belongsToMany(models.Farm,
      { foreignKey: 'land_id', through: 'land_parameters', as: 'farms' });
  }
}

module.exports = Parameter;
