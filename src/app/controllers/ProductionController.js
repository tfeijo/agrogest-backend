import Farm from '../models/Farm';
import City from '../models/City';
import State from '../models/State';
import Parameter from '../models/Parameter';

class ParameterController {
  async store(req, res) {
    const { farm_id } = req.params;
    const data = req.body;
    const { dataValues: farm } = await Farm.findByPk(farm_id);
    const { dataValues: city } = await City.findByPk(farm.city_id);
    const { dataValues: state } = await State.findByPk(city.state_id);

    // Todos os parametros por estado e
    const parameters = await Parameter.findAll({
      where: {
        state_id: state.id,
        activity_id: data.bovi_leite.activity_id,
      },
    });

    const paramActLeite = parameters.filter((parameter) => {
      if (parameter.activity_id === data.bovi_leite.activity_id) {
        return parameter;
      }
    });

    const paramActCorte = parameters.filter((parameter) => {
      if (parameter.activity_id === data.bovi_corte.activity_id) {
        return parameter;
      }
    });

    const paramActAvi = parameters.filter((parameter) => {
      if (parameter.activity_id === data.avicultura.activity_id) {
        return parameter;
      }
    });

    const paramActSuino = parameters.filter((parameter) => {
      if (parameter.activity_id === data.suinocultura.activity_id) {
        return parameter;
      }
    });

    const paramActAgri = parameters.filter((parameter) => {
      if (parameter.activity_id === data.agricultura.activity_id) {
        return parameter;
      }
    });


    return res.json({
      paramActLeite,
      paramActCorte,
      paramActAvi,
      paramActSuino,
      paramActAgri,
    });
  }
}

export default new ParameterController();
