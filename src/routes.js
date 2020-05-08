import { Router } from 'express';

import CityController from './app/controllers/CityController';
import StateController from './app/controllers/StateController';
import BiomeController from './app/controllers/BiomeController';

const routes = new Router();

routes.get('/', async (req, res) => res.json({ projeto: 'Agrogest' }));
routes.get('/cities', CityController.index);
routes.get('/cities/:id', CityController.show);
routes.post('/cities', CityController.store);
routes.put('/cities/:id', CityController.update);
routes.get('/states/:stateid/cities', CityController.indexByUf);
routes.delete('/cities/:id', CityController.delete);

routes.get('/states', StateController.index);
routes.get('/states/:id', StateController.show);
routes.post('/states', StateController.store);
// routes.put('/states/:id', StateController.update);
// routes.delete('/states/:id', StateController.delete);

routes.get('/biome/:id', BiomeController.show);
routes.post('/cities/:city_id/biomes', BiomeController.store);
routes.get('/biomes', BiomeController.index);

export default routes;
