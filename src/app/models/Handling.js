const { Model, DataTypes } = require('sequelize');

class Handling extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'prod_handling',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.System, { foreignKey: 'system_id', as: 'systems' });
  }
}

module.exports = Handling;
