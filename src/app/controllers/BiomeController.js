import Biome from '../models/Biome';
import City from '../models/City';

class BiomeController {
  async store(req, res) {
    const { city_id } = req.params;
    const { name } = req.body;

    const city = await City.findByPk(city_id);

    const [biome] = await Biome.findOrCreate({
      where: { name },
    });

    city.addBiome(biome);

    return res.json();
  }

  async index(req, res) {
    const biome = await Biome.findAll({
      include: { association: 'cities' },
    });


    return res.json(biome);
  }

  async show(req, res) {
    const biome = await Biome.findByPk(req.params.id);

    return res.json(biome);
  }

  async update(req, res) {
    const biomeUpdate = await Biome.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(biomeUpdate);
  }

  async delete(req, res) {
    await Biome.destroy({ where: { id: req.params.id } });

    return res.send();
  }
}

export default new BiomeController();
