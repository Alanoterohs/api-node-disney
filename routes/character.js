const Router = require('express-promise-router');
const router = new Router();
const { createCharacters, listCharacters, detailsCharacters } = require('../controllers/characters');

router.post('/', createCharacters);
router.get('/', listCharacters);
router.get('/:id', detailsCharacters);

module.exports = router;
