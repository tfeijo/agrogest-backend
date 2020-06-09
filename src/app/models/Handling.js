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
    this.belongsToMany(models.System,
      {
        foreignKey: 'handling_id',
        through: 'prod_system_handling',
        as: 'systems',
      });
  }
}

module.exports = Handling;
