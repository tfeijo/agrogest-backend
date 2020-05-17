import City from '../models/City';

class CityController {
  async store(req, res) {
    const city = await City.create(req.body);
    return res.json(city);
  }

  async index(req, res) {
    const city = await City.findAll({
      attributes: ['id', 'name', 'fiscal_module'],
      order: [
        ['name', 'ASC'],
      ],
      include: [
        {
          association: 'state',
          attributes: ['id', 'name'],
        },
        {
          association: 'biomes',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return res.json(city);
  }

  async show(req, res) {
    const city = await City.findByPk(req.params.id, {
      attributes: ['id', 'name', 'fiscal_module'],
      include: [
        {
          association: 'state',
          attributes: ['id', 'name'],
        },
        {
          association: 'biomes',
          through: {
            attributes: [],
          },
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(city);
  }

  async indexByUf(req, res) {
    const { state_id } = req.params;
    const cities = await City.findAll({
      where: { state_id },
      attributes: ['id', 'name'],
      order: [
        ['name', 'ASC'],
      ],
      include: [
        {
          association: 'biomes',
          through: {
            attributes: [],
          },
          attributes: [],
        },
      ],
    });

    return res.json(cities);
  }

  async indexByBiome(req, res) {
    const { biome_id } = req.params;

    const cities = await City.findAll({
      attributes: ['id', 'name'],
      order: [
        ['name', 'ASC'],
      ],
      include: [
        {
          where: { id: biome_id },
          association: 'biomes',
          through: {
            attributes: [],
          },
          attributes: [],
        },
      ],
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
