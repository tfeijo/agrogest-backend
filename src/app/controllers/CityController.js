import City from '../models/City';

class CityController {
  async store(req, res) {
    const city = await City.create(req.body);

    return res.json(city);
  }

  async index(req, res) {
    const city = await City.findAll();

    return res.json(city);
  }

  async show(req, res) {
    const city = await City.findByPk(req.params.id);
    console.log(typeof city.biome);

    return city === null ? res.send('There is no city with this id') : res.json(city);
  }

  async update(req, res) {
    const cityUpdate = await City.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(cityUpdate);
  }

  async delete(req, res) {
    await City.destroy({ where: { id: req.params.id } });

    return res.send();
  }
}

export default new CityController();
