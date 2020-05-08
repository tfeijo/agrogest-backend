import Sequelize from 'sequelize';

import City from '../app/models/City';
import State from '../app/models/State';
import Biome from '../app/models/Biome';

import databaseConfig from '../config/database';

const models = [City, State, Biome];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }

  associate() {
    models.map((model) => model.associate(this.connection.models));
  }
}

export default new Database();
