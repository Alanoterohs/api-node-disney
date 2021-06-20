const Router = require('express-promise-router');
const router = new Router();
const { auth } = require('../controllers/users');
const { createCharacters,
  listCharacters,
  detailsCharacters,
  searchCharacter,
  updateCharacter,
  deleteCharacter, } = require('../controllers/characters');

router.post('/', auth, createCharacters);
router.get('/', auth, listCharacters);
router.get('/details/:id', auth, detailsCharacters);
router.get('/search', searchCharacter);
router.put('/:id', auth, updateCharacter);
router.delete('/:id', auth, deleteCharacter);

module.exports = router;
