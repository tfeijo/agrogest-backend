import Sequelize from 'sequelize';

import City from '../app/models/City';
import Farm from '../app/models/Farm';
import State from '../app/models/State';
import Biome from '../app/models/Biome';
import System from '../app/models/System';
import SizeFarm from '../app/models/SizeFarm';
import Handling from '../app/models/Handling';
import Activity from '../app/models/Activity';
import Parameter from '../app/models/Parameter';
import Measurement from '../app/models/Measurement';
import Factor from '../app/models/Factor';

import databaseConfig from '../config/database';

const models = [
  City,
  Farm,
  State,
  Biome,
  System,
  SizeFarm,
  Activity,
  Parameter,
  Measurement,
  Factor,
  Handling,
];

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
