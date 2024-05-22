const router = require('express').Router();
const PokemonController = require('./controller');

const aPokemonController = new PokemonController()

router.get('/',  aPokemonController.get);
router.post('/', aPokemonController.post)


module.exports = router;