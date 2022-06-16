const cityService = require("../services/city");

class CityController {
  async saveCity(req, res) {
    try {
      const id = await cityService.saveCity(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }
  async deleteCity(req, res) {
    try {
      const id = await cityService.deleteCity(req.params);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }

  async getSavedCities(req, res) {
    try {
      const id = await cityService.getSavedCities();
      console.log(id);

      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }
}

module.exports = new CityController();
