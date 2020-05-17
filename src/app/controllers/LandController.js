import uuid from 'uuid-random';
import Land from '../models/Land';
import City from '../models/City';

class LandController {
  async store(req, res) {
    let land = req.body;
    const city = await City.findByPk(land.city_id);
    const size = (land.hectare / city.fiscal_module);
    if (land.installation_id == null) {
      land.installation_id = uuid();
    }

    if (size <= 4.0) {
      land.size_id = 1;
    } else if (size <= 15) {
      land.size_id = 2;
    } else { land.size_id = 3; }

    land = await Land.create(land);

    return res.json(land);
  }

  async index(req, res) {
    const land = await Land.findAll({
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

  async show(req, res) {
    const land = await Land.findByPk(req.params.id, {
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
    const landUpdate = await Land.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(landUpdate);
  }

  async delete(req, res) {
    await Land.destroy({ where: { id: req.params.id } });
    return res.send();
  }
}

export default new LandController();
