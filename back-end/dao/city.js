const db = require("../db/db");

class CityDAO {
  async saveCity(cityName, temp, humidity, cityId) {
    const [id] = await db("city")
      .insert({
        city_name: cityName,
        temp: temp,
        humidity: humidity,
        city_id: cityId,
      })
      .returning("id");
    return id;
  }

  async deleteCity(cityId) {
    const [id] = await db("city")
      .select("city")
      .where("city_id", cityId)
      .del()
      .returning("id");
    return id;
  }

  async getSavedCities() {
    const cities = await db("city").select().from("city");
    return cities;
  }
}

module.exports = new CityDAO();
