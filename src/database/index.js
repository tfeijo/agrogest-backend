import Sequelize from 'sequelize';

import City from '../app/models/City';
import State from '../app/models/State';

import databaseConfig from '../config/database';

const models = [City, State];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
