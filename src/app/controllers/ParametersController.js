import Parameter from '../models/Parameter';

class ParameterController {
  async store(req, res) {
    const city = await Parameter.create(req.body);
    return res.json(city);
  }

  async index(req, res) {
    const parameter = await Parameter.findAll({
      attributes: ['id', 'name'],
      // order: [
      //   ['name', 'ASC'],
      // ],
      // include: [
      //   {
      //     association: 'state',
      //     attributes: ['id', 'name'],
      //   },
      //   {
      //     association: 'biomes',
      //     attributes: ['id', 'name'],
      //     through: {
      //       attributes: [],
      //     },
      //   },
      // ],
    });

    return res.json(parameter);
  }

  async show(req, res) {
    const parameter = await Parameter.findByPk(req.params.id, {
      attributes: ['id', 'name'],
      // include: [
      //   {
      //     association: 'state',
      //     attributes: ['id', 'name'],
      //   },
      //   {
      //     association: 'biomes',
      //     through: {
      //       attributes: [],
      //     },
      //     attributes: ['id', 'name'],
      //   },
      // ],
    });

    return res.json(parameter);
  }

  async update(req, res) {
    const cityUpdate = await Parameter.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(cityUpdate);
  }

  async delete(req, res) {
    await Parameter.destroy({ where: { id: req.params.id } });

    return res.send();
  }
}

export default new ParameterController();
