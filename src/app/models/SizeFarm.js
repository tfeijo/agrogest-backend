const { Model, DataTypes } = require('sequelize');

class SizeFarm extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'size_land',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Farm, { foreignKey: 'size_id', as: 'farms' });
  }
}

module.exports = SizeFarm;
