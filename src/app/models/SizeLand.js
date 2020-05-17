const { Model, DataTypes } = require('sequelize');

class SizeLand extends Model {
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
    this.hasMany(models.Land, { foreignKey: 'size_id', as: 'lands' });
  }
}

module.exports = SizeLand;
