import { Router } from 'express';

import CityController from './app/controllers/CityController';
import StateController from './app/controllers/StateController';
import City from './app/models/City';
import State from './app/models/State';

const routes = new Router();

routes.get('/', async (req, res) => {
  // const state = await State.create({
  //    state_name: "Minas Gerais",
  //    uf: "MG",
  // });

  const city = await City.create({
    city_name: 'Juiz de Fora',
    biome: 'Teste',
    fiscal_module: 40,
    state: 1,
  });

  return res.json(city);
});

routes.get('/cities', CityController.index);
routes.get('/cities/:id', CityController.show);
routes.post('/cities', CityController.store);
routes.put('/cities/:id', CityController.update);
routes.delete('/cities/:id', CityController.delete);
routes.get('/states', StateController.index);
routes.get('/states/:id', StateController.show);
routes.post('/states', StateController.store);
routes.put('/states/:id', StateController.update);
routes.delete('/states/:id', StateController.delete);

export default routes;
