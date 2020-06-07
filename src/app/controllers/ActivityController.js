import Activity from '../models/Activity';

class ActivityController {
  async index(req, res) {
    const activities = await Activity.findAll({
      attributes: ['id', 'name'],
    });

    return activities;
  }

  async store(req, res) {
    const activity = await Activity.create(req.body);
    return res.json(activity);
  }
}

export default new ActivityController();
