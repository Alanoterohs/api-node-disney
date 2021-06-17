const Router = require('express-promise-router');
const router = new Router();
const {
  createMovies,
  getMovies,
  detailsMovies,
  searchMovie,
  updateMovies,
  deleteMovies,
 } = require('../controllers/movies');

router.post('/', createMovies);
router.get('/', getMovies);
router.get('/details/:id', detailsMovies);
router.get('/search', searchMovie);
router.put('/:id', updateMovies);
router.delete('/:id', deleteMovies);

module.exports = router;
