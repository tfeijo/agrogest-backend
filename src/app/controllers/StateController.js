import State from '../models/State';

class StateController {
  async store(req, res) {
    const state = await State.create(req.body);

    return res.json(state);
  }

  async index(req, res) {
    const state = await State.findAll();

    return res.json(state);
  }

  async show(req, res) {
    const state = await State.findByPk(req.params.id);

    return res.json(state);
  }

  async showByUf(req, res) {
    const state = await State.findOne({ where: { uf: req.params.uf } });

    return res.json(state);
  }

  async update(req, res) {
    const stateUpdate = await State.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(stateUpdate);
  }

  async delete(req, res) {
    await State.destroy({ where: { id: req.params.id } });

    return res.send();
  }
}

export default new StateController();
