const Router = require('express-promise-router');
const router = new Router();
const { createMovies } = require('../controllers/movies');

router.post('/', createMovies);

module.exports = router;
