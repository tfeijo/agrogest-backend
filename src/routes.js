import { Router } from 'express';

import CityController from './app/controllers/CityController';
import StateController from './app/controllers/StateController';

const routes = new Router();

routes.get('/', async (req, res) => res.json({ projeto: 'Agrogest' }));
routes.get('/cities', CityController.index);
routes.get('/cities/:id', CityController.show);
routes.post('/cities', CityController.store);
routes.put('/cities/:id', CityController.update);
routes.delete('/cities/:id', CityController.delete);

routes.get('/states', StateController.index);
routes.get('/states/:id', StateController.show);
routes.get('/states/uf/:uf', StateController.showByUf);
routes.post('/states', StateController.store);
// routes.put('/states/:id', StateController.update);
// routes.delete('/states/:id', StateController.delete);

export default routes;
