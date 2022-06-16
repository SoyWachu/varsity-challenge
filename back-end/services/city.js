const cityDAO = require("../dao/city");

class CityService {
  saveCity(cityDto) {
    return cityDAO.saveCity(
      cityDto.name,
      cityDto.main.humidity,
      cityDto.main.temp,
      cityDto.id
    );
  }

  deleteCity(cityDto) {
    const { cityId } = cityDto;

    return cityDAO.deleteCity(cityId);
  }
  getSavedCities() {
    return cityDAO.getSavedCities();
  }
}

module.exports = new CityService();
