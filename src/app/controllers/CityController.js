import City from '../models/City';

class CityController {
  async store(req, res) {
    const city = await City.create(req.body);
    return res.json(city);
  }

  async index(req, res) {
    const city = await City.findAll({
      include: { association: 'biomes' },
    });

    return res.json(city);
  }

  async show(req, res) {
    const city = await City.findByPk(req.params.id, {
      include: { association: 'state' },
    });

    return res.json(city);
  }

  async indexByUf(req, res) {
    const { stateid } = req.params;
    const cities = await City.findAll({
      where: { state: stateid },
      include: { association: 'state' },
    });

    return res.json(cities);
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
