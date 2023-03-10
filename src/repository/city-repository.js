const { City } = require('../models/index');

class CityRepository {

  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong in repo layer");
      throw { error };
    }
  }

  async deleteCity(cityId ) {
    console.log("repo",cityId)
    try {
      await City.destroy({
        where: { id: cityId },
      });
    } catch (error) {
      console.log("something went wrong in repo layer");
      throw { error };
    }
  }

  async updateCity( cityId, data ) {
    try {
      // const city = await City.update(data, {
      //   where: { id: cityId },
      //   returning:true,
      //   plain:true
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
     
    } catch (error) {
      console.log("something went wrong in repo layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in repo layer");
      throw { error };
    }
  }

  async getAllCities(cityId) {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong in repo layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;