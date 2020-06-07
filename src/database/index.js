import Sequelize from 'sequelize';

import City from '../app/models/City';
import Land from '../app/models/Land';
import State from '../app/models/State';
import Biome from '../app/models/Biome';
import System from '../app/models/System';
import SizeLand from '../app/models/SizeLand';
import Handling from '../app/models/Handling';
import Activity from '../app/models/Activity';
import Parameter from '../app/models/Parameter';
import Measurement from '../app/models/Measurement';
import PolluitionFactor from '../app/models/PolluitionFactor';

import databaseConfig from '../config/database';

const models = [
  City,
  Land,
  State,
  Biome,
  System,
  SizeLand,
  Activity,
  Parameter,
  Measurement,
  PolluitionFactor,
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
