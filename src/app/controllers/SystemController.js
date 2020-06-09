import System from '../models/System';

class SystemController {
  async index(req, res) {
    const systems = await System.findAll({
      attributes: ['id', 'name', 'activity_id'],
    });

    return res.json(systems);
  }

  async indexByActivity(req, res) {
    const { activity_id } = req.params;

    const systems = await System.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          where: { id: activity_id },
          association: 'activities',
          through: {
            attributes: [],
          },
          attributes: [],
        },
      ],
    });
    return res.json(systems);
  }

  async store(req, res) {
    const { activity_id } = req.params;
    const { name } = req.body;

    const [system] = await System.findOrCreate({
      where: {
        name,
      },
      defaults: {
        activity_id,
        name,
      },
    });

    return res.json(system);
  }
}

export default new SystemController();
