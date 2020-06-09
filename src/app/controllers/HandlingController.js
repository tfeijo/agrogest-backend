import Handling from '../models/Handling';

class HandlingController {
  async index(req, res) {
    const handling = await Handling.findAll({
      attributes: ['id', 'name', 'system_id'],
    });

    return res.json(handling);
  }

  async indexBySystem(req, res) {
    const { system_id } = req.params;

    const handling = await Handling.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          where: { id: system_id },
          association: 'systems',
          through: {
            attributes: [],
          },
          attributes: [],
        },
      ],
    });
    return res.json(handling);
  }

  async store(req, res) {
    const { system_id } = req.params;
    const { name } = req.body;

    const [handling] = await Handling.findOrCreate({
      where: {
        name,
      },
      defaults: {
        system_id,
        name,
      },
    });
    return res.json(handling);
  }
}

export default new HandlingController();
