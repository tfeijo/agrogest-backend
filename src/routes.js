import { Router } from 'express';
import CityController from './app/controllers/CityController';
import StateController from './app/controllers/StateController';
import BiomeController from './app/controllers/BiomeController';
import FarmController from './app/controllers/FarmController';
import HandlingController from './app/controllers/HandlingController';
import MeasurementController from './app/controllers/MeasurementController';
import ActivityController from './app/controllers/ActivityController';
import ParametersController from './app/controllers/ParametersController';
import SystemController from './app/controllers/SystemController';
import ProductionController from './app/controllers/ProductionController';

const routes = new Router();
const fs = require('fs');

routes.get('/', async (req, res) => {
  fs.readFile('./README.md', (err, buf) => {
    const content = buf.toString();
    return res.send(content);
  });
});


routes.get('/cities', CityController.index);
routes.get('/cities/:id', CityController.show);
routes.get('/states/:state_id/cities', CityController.indexByUf);
routes.get('/biomes/:biome_id/cities', CityController.indexByBiome);
// routes.post('/cities', CityController.store);
// routes.put('/cities/:id', CityController.update);
// routes.delete('/cities/:id', CityController.delete);

routes.get('/states', StateController.index);
routes.get('/states/:id', StateController.show);
// routes.post('/states', StateController.store);
// routes.put('/states/:id', StateController.update);
// routes.delete('/states/:id', StateController.delete);

routes.get('/biome/:id', BiomeController.show);
routes.get('/biomes', BiomeController.index);
// routes.post('/cities/:city_id/biomes', BiomeController.store);

routes.get('/farms', FarmController.index);
routes.get('/farms/:id', FarmController.show);
routes.post('/farms', FarmController.store);

routes.post('/production/activities', ActivityController.store);
routes.get('/production/activities', ActivityController.index);

routes.get('/production/systems', SystemController.index);
routes.post('/production/activities/:activity_id/system', SystemController.store);
routes.get('/production/activities/:activity_id/system', SystemController.indexByActivity);

routes.get('/production/measurements', MeasurementController.index);
routes.post('/production/systems/:system_id/measurement', MeasurementController.store);
routes.get('/production/systems/:system_id/measurement', MeasurementController.indexBySystem);

routes.get('/production/handling', HandlingController.index);
routes.post('/production/systems/:system_id/handling', HandlingController.store);
routes.get('/production/systems/:system_id/handling', HandlingController.indexBySystem);

routes.post('/production/parameters', ParametersController.store);
routes.get('/states/:state_id/parameters', ParametersController.indexByUf);
routes.get('/production/parameters', ParametersController.index);
routes.post('/farms/:farm_id/productions', ProductionController.store);


export default routes;
