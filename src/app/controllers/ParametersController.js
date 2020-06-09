import Parameter from '../models/Parameter';
import Factor from '../models/Factor';
import Activity from '../models/Activity';
import System from '../models/System';
import Handling from '../models/Handling';
import Measurement from '../models/Measurement';

class ParameterController {
  async indexByUf(req, res) {
    const { state_id } = req.params;
    const parameters = await Parameter.findAll({
      where: { state_id },
      attributes: ['id', 'minimum', 'small', 'medium', 'large', 'exceptional'],
      include: [
        {
          association: 'state',
          attributes: ['id', 'name'],
        },
        {
          association: 'activity',
          attributes: ['id', 'name'],
        },
        {
          association: 'system',
          attributes: ['id', 'name'],
        },
        {
          association: 'measurement',
          attributes: ['id', 'name'],
        },
        {
          association: 'factors',
          through: {
            attributes: [],
          },
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(parameters);
  }

  async index(req, res) {
    const parameters = await Parameter.findAll({
      attributes: ['id', 'minimum', 'small', 'medium', 'large', 'exceptional'],
      include: [
        {
          association: 'state',
          attributes: ['id', 'name'],
        },
        {
          association: 'activity',
          attributes: ['id', 'name'],
        },
        {
          association: 'system',
          attributes: ['id', 'name'],
        },
        {
          association: 'measurement',
          attributes: ['id', 'name'],
        },
        {
          association: 'factors',
          through: {
            attributes: [],
          },
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(parameters);
  }

  async store(req, res) {
    const {
      factors,
      activity_id,
      system_id,
      measurement_id,
      handling_id,
      ...rest
    } = req.body;

    const activity = await Activity.findByPk(activity_id);
    const system = await System.findByPk(system_id);
    const measurement = await Measurement.findByPk(measurement_id);
    const handling = await Handling.findByPk(handling_id);

    activity.addSystem(system);
    system.addMeasurement(measurement);
    system.addHandling(handling);

    const parameter = await Parameter.create({
      activity_id,
      system_id,
      measurement_id,
      handling_id,
      ...rest,
    });

    const array_factors = factors.split(',').map(String);
    array_factors.map(async (factor) => {
      const [add_factor] = await Factor.findOrCreate({
        where: {
          name: factor,
        },
      });
      add_factor.addParameter(parameter);
    });


    return res.json(parameter);
  }
}

export default new ParameterController();
