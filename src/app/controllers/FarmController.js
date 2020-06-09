import uuid from 'uuid-random';
import Farm from '../models/Farm';
import City from '../models/City';

class LandController {
  async store(req, res) {
    let farm = req.body;
    const city = await City.findByPk(farm.city_id);
    const size = (farm.hectare / city.fiscal_module);
    if (farm.installation_id == null) {
      farm.installation_id = uuid();
    }

    if (size <= 4.0) {
      farm.size_id = 1;
    } else if (size <= 15) {
      farm.size_id = 2;
    } else { farm.size_id = 3; }

    farm = await Farm.create(farm);

    return res.json(farm);
  }

  async index(req, res) {
    const land = await Farm.findAll({
      attributes: ['id', 'installation_id', 'hectare', 'licensing'],
      include: [
        {
          association: 'city',
          attributes: ['id', 'name', 'fiscal_module'],
          include: [
            {
              association: 'state',
              attributes: ['id', 'name', 'uf'],
            },
            {
              association: 'biomes',
              attributes: ['id', 'name'],
              through: {
                attributes: [],
              },
            },
          ],
        },
        {
          association: 'size',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(land);
  }

  async show(req, res) {
    const land = await Farm.findByPk(req.params.id, {
      attributes: ['id', 'installation_id', 'hectare', 'licensing'],
      include: [
        {
          association: 'city',
          attributes: ['id', 'name'],
          include: [
            {
              association: 'state',
              attributes: ['id', 'name', 'uf'],
            },
            {
              association: 'biomes',
              attributes: ['id', 'name'],
              through: {
                attributes: [],
              },
            },
          ],
        },
        {
          association: 'size',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(land);
  }

  async update(req, res) {
    const landUpdate = await Farm.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(landUpdate);
  }

  async delete(req, res) {
    await Farm.destroy({ where: { id: req.params.id } });
    return res.send();
  }
}

export default new LandController();
