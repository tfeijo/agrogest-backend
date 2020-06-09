import Measurement from '../models/Measurement';

class MeasurementController {
  async index(req, res) {
    const measurements = await Measurement.findAll({
      attributes: ['id', 'name', 'system_id'],
    });

    return res.json(measurements);
  }

  async indexBySystem(req, res) {
    const { system_id } = req.params;

    const measurements = await Measurement.findAll({
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
    return res.json(measurements);
  }

  async store(req, res) {
    const { system_id } = req.params;
    const { name } = req.body;

    const [measurement] = await Measurement.findOrCreate({
      where: {
        name,
      },
      defaults: {
        system_id,
        name,
      },
    });
    return res.json(measurement);
  }
}

export default new MeasurementController();
