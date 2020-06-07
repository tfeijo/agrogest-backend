const { Model, DataTypes } = require('sequelize');

class PolluitionFactor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'pulluition_factors',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Parameter,
      {
        foreignKey: 'factor_id',
        through: 'parameter_factors',
        as: 'parameters',
      });
  }
}

module.exports = PolluitionFactor;
