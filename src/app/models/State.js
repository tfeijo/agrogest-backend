const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class State extends Model {
  static init(sequelize) {
    super.init(
      {
        state_name: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = State;
