const { Model, DataTypes } = require('sequelize');

class Factor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'prod_factors',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Parameter,
      {
        foreignKey: 'factor_id',
        through: 'prod_parameter_factors',
        as: 'parameters',
      });
  }
}

module.exports = Factor;
