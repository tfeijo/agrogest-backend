import Activity from '../models/Activity';

class ActivityController {
  async index(req, res) {
    const activities = await Activity.findAll({
      attributes: ['id', 'name'],
    });

    return res.json(activities);
  }

  async store(req, res) {
    const { name } = req.body;


    const [activity] = await Activity.findOrCreate({
      where: {
        name,
      },
      defaults: {
        name,
      },
    });
    return res.json(activity);
  }
}

export default new ActivityController();
