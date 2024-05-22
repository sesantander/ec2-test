const PokemonService = require('./service')

module.exports = class PokemonController {
  get = async(req, res, next) => {
    try {
      const params = {...req.query};
      const aPokemonService = new PokemonService();

      const response = await aPokemonService.get(params);

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }

  post = async(req, res, next) => {
    try {
      const body = {...req.body};
      const aPokemonService = new PokemonService();

      const response = await aPokemonService.post(body);

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  }
}