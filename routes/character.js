const Router = require('express-promise-router');
const router = new Router();
const { createCharacters,
  listCharacters,
  detailsCharacters,
  searchCharacter,
  updateCharacter,
  deleteCharacter, } = require('../controllers/characters');

router.post('/', createCharacters);
router.get('/', listCharacters);
router.get('/details/:id', detailsCharacters);
router.get('/search', searchCharacter);
router.put('/:id', updateCharacter);
router.delete('/:id', deleteCharacter);

module.exports = router;
