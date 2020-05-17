import { Router } from 'express';

import CityController from './app/controllers/CityController';
import StateController from './app/controllers/StateController';
import BiomeController from './app/controllers/BiomeController';
import LandController from './app/controllers/LandController';

const routes = new Router();

routes.get('/', async (req, res) => res.json({ projeto: 'Agrogest' }));


routes.get('/cities', CityController.index);
routes.get('/cities/:id', CityController.show);
routes.get('/cities/state/:state_id', CityController.indexByUf);
routes.get('/cities/biome/:biome_id', CityController.indexByBiome);
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

routes.get('/lands', LandController.index);
routes.get('/lands/:id', LandController.show);
routes.post('/lands', LandController.store);

export default routes;
